package com.firfi.jira.plugins.tempoaddon.filter;

import org.apache.log4j.Logger;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.IOException;

/**
 * Created with IntelliJ IDEA.
 * User: Firfi
 * Date: 2/8/13
 * Time: 1:42 PM
 * To change this template use File | Settings | File Templates.
 */
public class TempoFormDataFilter implements Filter {

    private final static Logger log = Logger.getLogger(TempoFormDataFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        log.warn("initializing");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        log.warn("ol1o");
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        log.warn(request.getParameter("time"));
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {
        //To change body of implemented methods use File | Settings | File Templates.
    }
}
