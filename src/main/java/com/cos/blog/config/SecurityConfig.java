package com.cos.blog.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

//빈 등록: 스프링 컨테이너에서 객체를 관리할 수 있게 하는것

@Configuration // 빈등록 IoC(관리)
@EnableWebSecurity // 시큐리티 필터가 등록이된다.
@EnableGlobalMethodSecurity(prePostEnabled = true) // 특정 주소로 접근을 하면 권한 및 인증을 미리 체크하겠다는뜻.
public class SecurityConfig {
	
	@Bean // IOC가 됨.
	public BCryptPasswordEncoder encodePWD() {
		String encPassword = new BCryptPasswordEncoder().encode("1234");
		return new BCryptPasswordEncoder();
	}

	

	@Bean
	 SecurityFilterChain configure(HttpSecurity http) throws Exception {
		
		http
		.csrf().disable() //csrf 토근 비활성화 (테스트시 걸어두는 게 좋음)
		.authorizeHttpRequests()
		.requestMatchers("/auth/**","js/**","/css/**","/image/**","/**")
		.permitAll()
		.anyRequest()
		.authenticated()
		.and()
		.formLogin().
		loginPage("/auth/loginForm")
		.loginProcessingUrl("/auth/loginProc") // 스프링 시큐리티가 해당 주소로  로그인을 가로채서 대신 로그인 해준다.
		.defaultSuccessUrl("/");
		
		return http.build();
	}
}