package com.login.loginApp;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        String autHeader =httpServletRequest.getHeader("authorization");

        if ( (httpServletRequest.getMethod().equals("POST")) ||
                (httpServletRequest.getMethod().equals("PUT")) ||
                (httpServletRequest.getMethod().equals("DELETE")) ||
                (httpServletRequest.getMethod().equals("GET")) ) {
            if ( (autHeader == null) || ( !autHeader.startsWith("Bearer ") ) ) {
                throw new ServletException("1. No Bearer");
            }// if null || !Bearer

            String token =autHeader.substring(7);

            try {
                Claims claims = Jwts.parser().setSigningKey("this-secret-is-not-very-secret-99")
                        .parseClaimsJws(token).getBody();
                request.setAttribute("Claims", claims);
            } catch ( SignatureException | MalformedJwtException e ) {
                throw new ServletException("2. Invalid Token");
            }//Catch
        }// if POST PUT GET DELETE

        chain.doFilter(httpServletRequest, httpServletResponse);

    }

}//class JwtFiler
