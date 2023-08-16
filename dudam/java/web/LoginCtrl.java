/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package dudam.login.web;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.egovframe.rte.fdl.property.EgovPropertyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springmodules.validation.commons.DefaultBeanValidator;

import dudam.login.service.LoginService;
import dudam.notice.web.NoticeCtrl;

/**
 * @Class Name : EgovSampleController.java
 * @Description : EgovSample Controller Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2009.03.16           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */

@Controller
public class LoginCtrl {

	/** EgovSampleService */
	@Resource(name = "loginService")
	private LoginService loginService;

	/** EgovPropertyService */
	@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;
	
	private static final Logger Log = LoggerFactory.getLogger(LoginCtrl.class);

	/**
	 * 로그인 화면으로 이동
	 * @param param
	 * @param model
	 * @return "login"
	 * @exception Exception
	 */
	@RequestMapping(value = "/loginView.do")
	public String loginView(@RequestParam Map<String, Object> param, Model model) throws Exception {
		
		Log.debug("1 : >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		
		return "login";
	}
	
	/**
	 * 로그인
	 * @param param
	 * @param model
	 * @return "main"
	 * @exception Exception
	 */
	@RequestMapping(value = "/login.do")
	public String login(@RequestParam Map<String, Object> param, HttpServletRequest request, HttpSession session, ModelMap model) throws Exception {
		
		Map<String, Object> result = loginService.selectLoginCfm(param);
		
		if(result != null) {
			System.out.println("1 : >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
			
			//session 설정
			session.setAttribute("memberId", result.get("memberId"));
    		
    		request.setAttribute("msg", "로그인 되었습니다.");
    		request.setAttribute("url", "/main.do");
    		
			return "login";
		}else {
			System.out.println("2 : >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
			
			//java에서 jsp로 변수 넘겨서 스크립트에서 사용 하기 위해서는 request.setAttribute 또는 model.addAttribute를 사용해야한다
			//java에서 Thymeleaf를 사용하여 스크립트에서 사용 하기 위해서는 스프링부트에서 html 파일에서 사용해야 한다.
    		request.setAttribute("msg", "로그인 실패했습니다. 아이디와 비밀번호를 확인하세요.");
    		model.addAttribute("url", "/loginView.do");
    		
			return "login";
		}
	}
	
	/**
	 * 로그아웃
	 * @param param
	 * @param model
	 * @return "loginView"
	 * @exception Exception
	 */
	@RequestMapping(value = "logOut.do")
	public String logOut(@RequestParam Map<String, Object> param, Model model, HttpSession session) throws Exception {
	
		if(session.getAttribute("memberId") != null){
			session.removeAttribute("memberId");
		}
		return "redirect:loginView.do";
	}
	
}
