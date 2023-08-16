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
package dudam.study.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.egovframe.rte.fdl.property.EgovPropertyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springmodules.validation.commons.DefaultBeanValidator;

import dudam.study.service.StudyService;
import dudam.study.vo.BonusVO;
import dudam.study.vo.SalgradeVO;
import dudam.study.vo.StudyVO;

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
public class StudyCtrl {

	/** EgovSampleService */
	@Resource(name = "studyService")
	private StudyService studyService;

	/** EgovPropertyService */
	@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;
	
	private static final Logger Log = LoggerFactory.getLogger(StudyCtrl.class);

	 /**
	  * jsp : 아작스 , ctrl : vo파일로 받아서 vo 파일로 jsp 넘기기.
	  * @param studyVO - 조회할 정보가 담긴 studyVO
	  * @param model
	  * @return "resultList"
	  * @exception Exception
	  */
	  @ResponseBody
	  @RequestMapping(value = "/selectSerialize.do")
	  public List<StudyVO> selectSerialize(@RequestBody StudyVO studyVO, Model model, HttpSession session) throws Exception {

		List<StudyVO> resultList = studyService.selectSerialize(studyVO);
		
		return resultList;
	}
	  
	/**
	 * jsp : 아작스 , ctrl : vo파일로 받아서 vo 파일로 jsp 넘기기.
	 * 그리드 클릭시 상세 조회 
	 * VO파일이 1개로 구성이 되어 있을 경우 "단건에 다건" 결과값을 추가 해여 화면으로 값 넘긴다.
	 * @param studyVO - 조회할 정보가 담긴 studyVO
	 * @param model
	 * @return "result"
	 * @exception Exception
	 */
	 @ResponseBody
	 @RequestMapping(value = "/selectDtlSerialize.do")
	 public StudyVO selectDtlSerialize(@RequestBody StudyVO studyVO, Model model, HttpSession session) throws Exception {

	    StudyVO result = studyService.selectDtlSerialize(studyVO);
	    
	    List<StudyVO> resultList = studyService.selectDeptList(studyVO);
	    
	    //단건 result에 다건 resultList를 추가 하여 화면에 넘긴다.
	    //VO파일에 resultList를 만든다.
	    //단건 result에 VO 파일에 있는 resultList를 set 해서 화면으로 넘긴다.
	    //20230619
	    result.setResultList(resultList);
	
	   return result;
	}	
	 
	/**
	 * jsp : 아작스 , ctrl : vo파일로 받아서 vo 파일로 jsp 넘기기.
	 * 그리드 클릭시 상세 조회 
	 * VO파일이 2개로 구성 되어 있으며 List를 List추가해서 화면에 넘기던지 List에 VO만 추가해서 넘기는 경우 "다건에 단건 추가"
	 * @param studyVO - 조회할 정보가 담긴 studyVO
	 * @param model
	 * @return "resultList"
	 * @exception Exception
	 */
	 @ResponseBody
	 @RequestMapping(value = "/selectBonusList.do")
	 public List<BonusVO> selectBonusList(@RequestBody StudyVO studyVO, Model model, HttpSession session) throws Exception {

		 //VO 파일이 BonusVO, SalgradeVO로 구성이 되어 있음
		 //resultList 다건에 result 단건을 추가 할 경우
		 
		 //(1) 둘다 List 타입으로 할 경우
		 //1. resultList, result 둘다 List 타입으로 받는다.
//		 List<BonusVO> resultList = studyService.selectBonusList(studyVO); 
//		 List<SalgradeVO> result = studyService.selectSalgrade(studyVO);

		 //2. resultList에 get함수로 0번째에 result를 담겠다고 해주면 된다.
		 //resultList에 result를 담는다.
//		 resultList.get(0).setResult(result);
		 
		 //3. BonusVO파일에 private List<SalgradeVO> result; 만들고 getter, setter를 해주면 된다.
		 
		 //4. jsp파일에서는 console.log(data[0].result);로 데이터가 넘어 왔는지 확인 하면 된다.
		 //(2) 하나는 List, 하나는 그냥 VO일 경우
		 //1. 하나는 List로 다건 , 또 하나는 그냥 VO파일로 단건으로 받는다
		 List<BonusVO> resultList = studyService.selectBonusList(studyVO); 
		 SalgradeVO result1 = studyService.selectSalgrade(studyVO);
		 
		 //2. resultList에 get함수로 0번째에 result를 담겠다고 해주면 된다.
		 //resultList에 result를 담는다. 
		 resultList.get(0).setResult1(result1);
		 
		  //3. BonusVO파일에 private SalgradeVO result1; 만들고 getter, setter를 해주면 된다.
	     
		  //4. jsp파일에서는 console.log(data[0].result1);로 데이터가 넘어 왔는지 확인 하면 된다.

		 //(3) "단건에 다건을 추가" 하는 경우 VO파일이 2개로 구성이 되어 있어도 아래 방법으로 추가가 괸다.
		 //1. result1.setResultList(resultList);
         // 2. return result1 형태로 화면으로 결과 값을 넘겨 준다.		 
		 
		 return resultList;
	}		 
	 
	/**
	 * jsp : 아작스 , ctrl : vo파일로 받아서 vo 파일로 jsp 넘기기.
	 * 스트링으로 , 구분으로 넘어온 값 split함수로 구분 후 배열에 담기
	 * 배열을 for문을 사용하여 각 값을 조회
	 * @param studyVO - 조회할 정보가 담긴 studyVO
	 * @param model
	 * @return "selectSerialize"
	 * @exception Exception
	 */
	 @ResponseBody
	 @RequestMapping(value = "/insertCheckSerialize.do")
	 public StudyVO insertCheckSerialize(@RequestBody StudyVO studyVO, Model model, HttpSession session) throws Exception {

		 //스트링으로 jsp에서 넘어온 값을 특수문자 , 로 구분을 짓는다. 그래서 split()함수로 구분 하여 배열에 담는다.
		 String dnameArr[] = studyVO.getDname().split(",");
		 String empnoArr[] = studyVO.getEmpno().split(",");
		 
		 StudyVO result = null;
		 
		 for(int i=0; i < empnoArr.length; i++) {
			 //배열은 [i] 인덱스로 각각의 값을 가지고 온다.
			 Log.debug("empnoArr[i] : >>>>>>>>>>>>" + empnoArr[i]);
			 //아래 형태로 인서트를 하면된다. 주석은 뒷작업을 하기 싫어서 주석 처리 했음 20230618
			 //result = studyService.insertCheckSerialize(studyVO);
		 }
	   return result;
	}	
	 
	 
	
}
