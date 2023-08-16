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
package dudam.cmmn.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.egovframe.rte.fdl.property.EgovPropertyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springmodules.validation.commons.DefaultBeanValidator;

import dudam.cmmn.service.CmmnService;

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
public class CmmnCtrl {

	/** EgovSampleService */
	@Resource(name = "cmmnService")
	private CmmnService cmmnService;

	/** EgovPropertyService */
	@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;
	
	private static final Logger Log = LoggerFactory.getLogger(CmmnCtrl.class);
	
	/**
	  * 상위 셀렉트 박스 선택시 하위 셀렉트 박스 값 보여 주고 자바로 넘기기(상위 셀렉트 박스 조회)
	  * @param Map<String, Object> - 조회할 정보가 담긴 Map<String, Object>
	  * @param 
	  * @return "noticeList"
	  * @exception Exception
	  */
	  //아작스에서 java 호출 시 
	  //자바 : @RequestBody, @ResponseBody, @PostMapping
	  //아작스 : data를 JSON.stringify(data), contentType : "application/json", 있어야한다.
	  //2023-02-22 위에 조건이 충족이 되어야함
	  @ResponseBody
	  @PostMapping(value = "/selectPopUpList.do")
	  public List<Map<String, Object>> selectPopUpList(@RequestBody Map<String, Object> param) throws Exception {
		  
	Log.debug("param : >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + param);	  
		List<Map<String, Object>> resultList = cmmnService.selectPopUpList(param);

		return resultList;
	} 

}
