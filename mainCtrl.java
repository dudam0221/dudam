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
package dudam.main.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.egovframe.rte.fdl.property.EgovPropertyService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springmodules.validation.commons.DefaultBeanValidator;

import dudam.main.service.MainService;
import dudam.main.vo.MainVO;

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
public class MainCtrl {

	/** EgovSampleService */
	@Resource(name = "mainService")
	private MainService mainService;

	/** EgovPropertyService */
	@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;

	/**
	 * 메인화면 로딩시 각각의 제품을 조회한다.
	 * @param searchVO - 조회할 정보가 담긴 SampleDefaultVO
	 * @param model
	 * @return "mainPage"
	 * @exception Exception
	 */
	@RequestMapping(value = "/main.do")
	public String mainPage(@ModelAttribute MainVO mainVO, Model model) throws Exception {

	List<Map<String, Object>> mainList = mainService.selectMainList(mainVO);

	model.addAttribute("resultList", mainList);
	return "mainPage";
	}
	
	/**
	 * 아작스 modelAndView 사용하여 jsp에서 java로 데이터 받고 데이터 넘겨 주는 방법
	 * 케이크 더 보기 클릭
	 * @param param
	 * @param jsonView
	 * @return "mainPage"
	 * @exception Exception
	 */
	@RequestMapping(value = "/cakeMoreList.do")
	public ModelAndView cakeMoreList(@RequestParam Map<String, Object> param) throws Exception {
	ModelAndView mav = new ModelAndView("jsonView");

	//@RequestParam로 값을 받을 때는 아래와 같이 캐스팅을 해야 한다.
	int liCnt =  Integer.parseInt((String) param.get("startNum")); 
	int startNum = liCnt + 1;
	int endNum = liCnt + 4;

	param.put("startNum", startNum);
	param.put("endNum", endNum);
	
	//케이크 더 보기 클릭 시 조회
	List<Map<String, Object>> cakeMoreList = mainService.selectcakeMoreList(param);
	
	//케이크 총 수량 조회
	Map<String, Object> mainProductCnt = mainService.selectmainProductCnt(param);
	
	for(int i=0; i < cakeMoreList.size(); i++) {
		if(mainProductCnt.get("cakecnt").equals(cakeMoreList.get(i).get("rowNum"))) {
			mav.addObject("more", "N");
		}
	}
	
	if(cakeMoreList == null || cakeMoreList.equals("")){
		mav.addObject("msg", "failure");
	}else{
		mav.addObject("msg", "success");
	}
	
	mav.addObject("result",cakeMoreList);
	return  mav;
	}
	
	/**
	 * 아직스 @ResponseBody사용 하여 json 형태로 jsp에 전달 @RequestBody로 jsp에서 java로 데이터 받는 방법 (VO파일로 데이터 받음)
	 * 수제청 더 보기 클릭
	 * @param mainVO
	 * @param result
	 * @return "mainPage"
	 * @exception Exception
	 */
	@ResponseBody
	@PostMapping(value = "/drinkMoreList.do")
	public List<Map<String, Object>> drinkMoreList(@RequestBody MainVO mainVO) throws Exception {
	
	int liCnt =  mainVO.getStartNum();
	int startNum = liCnt + 1;
	int endNum = liCnt + 4;
	
	mainVO.setStartNum(startNum);
	mainVO.setEndNum(endNum);
	
	//수제청 더 보기 조회
	List<Map<String, Object>> result = mainService.selectdrinkMoreList(mainVO);
	
	//수제청 총 수량 조회
	Map<String, Object> mainProductCnt = mainService.selectDrinkProductCnt(mainVO);
			
	Map<String, Object> map = new HashMap<String, Object>();
			
//	for(int i=0; i < result.size(); i++) {
//		if(mainProductCnt.get("drinkcnt").equals(result.get(i).get("rowNum"))) {
//			map.put("more", "N");
//		}
//	}
//	for (Map<String, Object> var : result) {
//		//var를 사용해주면 됨, var은 list.get(i)와 같은 역할
//		if(mainProductCnt.get("drinkcnt").equals(var.get("rowNum"))) {
//			map.put("more", "N");
//		}
//	}
	
	//위에 for문 대신 forEach를 사용 할 수 있음
	result.forEach(o ->{
		if(mainProductCnt.get("drinkcnt").equals(o.get("rowNum"))) {
			map.put("more", "N");
		}
	});
	
//  filter 사용으로 if문을 대신하고 collect로 list를 만들어 if문을 주어서 사용 할 수 있음
//	List<Map<String, Object>> usersFindByStream = result.stream()
//		    .filter(o->mainProductCnt.get("drinkcnt").equals(o.get("rowNum")))
//		    .collect(Collectors.toList());
//		if(usersFindByStream.size() > 0) {
//			map.put("more", "N");
//		}
	
	result.add(map);
			
    return result;
	}
	
	/**
	 * 아직스 @ResponseBody사용 하여 json 형태로 jsp에 전달 @RequestBody로 jsp에서 java로 데이터 받는 방법 (Map으로 데이터 받음)
	 * 답례품 더 보기 클릭
	 * @param param
	 * @param result
	 * @return "mainPage"
	 * @exception Exception
	 */
	@ResponseBody
	@PostMapping(value = "/thanksMoreList.do")
	public List<Map<String, Object>> thanksAllList(@RequestBody Map<String, Object> param) throws Exception {
	
	//@RequestBody로 값을 받을 때는 아래와 같이 캐스팅을 해야 한다.
	int liCnt = (int) param.get("startNum"); 
	int startNum = liCnt + 1;
	int endNum = liCnt + 4;

	param.put("startNum", startNum);
	param.put("endNum", endNum);
	
	//답례품 더 보기 조회
	List<Map<String, Object>> result = mainService.selectThanksMoreList(param);
	
	//답례품 총 수량 조회
	Map<String, Object> mainProductCnt = mainService.selectmainProductCnt(param);
	
	Map<String, Object> map = new HashMap<String, Object>();
	
	for(int i=0; i < result.size(); i++) {
		if(mainProductCnt.get("thankscnt").equals(result.get(i).get("rowNum"))) {
			map.put("more", "N");
		}
	}
	
	result.add(map);
	
    return result;
	}
	
	/**
	 * 아직스 @ResponseBody사용 하여 json 형태로 jsp에 전달 @RequestBody로 jsp에서 java로 데이터 받는 방법 (VO파일로 데이터 받음)
	 * 제품 상세 항목 조회
	 * @param mainVO
	 * @param result
	 * @return "mainPage"
	 * @exception Exception
	 */
	 @RequestMapping(value = "/productDetail.do")
	 public String productDetail(MainVO mainVO, ModelMap model) throws Exception {	
	 
	 Map<String, Object> result = mainService.selectproductDetail(mainVO);
	
	 model.addAttribute("resultList", result);
	
	 return "itemDetailView";
	 }
}
