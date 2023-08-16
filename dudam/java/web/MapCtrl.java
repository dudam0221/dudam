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
package dudam.map.web;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.apache.commons.lang3.ObjectUtils;
import org.egovframe.rte.fdl.property.EgovPropertyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springmodules.validation.commons.DefaultBeanValidator;

import dudam.map.service.MapService;

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
public class MapCtrl {

	/** EgovSampleService */
	@Resource(name = "mapService")
	private MapService mapService;

	/** EgovPropertyService */
	@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;
	
	private static final Logger Log = LoggerFactory.getLogger(MapCtrl.class);

	 /**
	  * form으로 화면 이동
	  * @param studyVO - 조회할 정보가 담긴 studyVO
	  * @param model
	  * @return "resultList"
	  * @exception Exception
	  */
	  @RequestMapping(value = "/moveMapView.do")
	  public String moveMapView() throws Exception {
		return "map";
   	  }  	
	  
 	 /**
	  * Map으로 select 후 List로 받기
	  * @param studyVO - 조회할 정보가 담긴 studyVO
	  * @param model
	  * @return "resultList"
	  * @exception Exception
	  */
	  @ResponseBody
	  @RequestMapping(value = "/selectMapList.do")
	  public List<Map<String, Object>> selectMapList(@RequestBody Map<String, Object> param) throws Exception {
	   
		  List<Map<String, Object>> resultList= mapService.selectMapList(param);
		  
			 
		  //사원번호 7566
		  BigDecimal num1 = new BigDecimal("7566");
		  for(int i=0; i < resultList.size(); i++) {
			  Log.debug("1 : >>>>>>>>>>>>>>>>");
			  
			  Log.debug("resultList.get(i).get(\"empno\") : >>>>>>>>>>>>>>>>" + resultList.get(i).get("empno"));
			  Log.debug("resultList.get(i).get(\"ename\") : >>>>>>>>>>>>>>>>" + resultList.get(i).get("ename"));
			  
			  if(resultList.get(i).get("empno").equals(num1)) {
				  Log.debug("2 : >>>>>>>>>>>>>>>>");
				  List<Map<String, Object>> pEname1 = (List<Map<String, Object>>) resultList.get(i).get("ename"); 
				Log.debug("pEname1 : >>>>>>>>>>>>>>>>>>>" + pEname1);
			  }
		  }
		  
		  //사원번호 7566
		  BigDecimal num = new BigDecimal("7566");
		  //사원번호 7566인 이름 값 메소드 호출 부분
		  List<Object> pEname = getResult(resultList, num);
		  Log.debug("pEname : >>>>>>>>>>>>>" + pEname);
		  
		  return resultList;
	  } 
	  
	  // 디비 조회 후 특정 조건에 특정 값 추출
	  // collect는 추출된 값을 배열로 만드는 함수
	  // bigDeciaml인 empno 값을 메소드 호출 하는 부분에서 받아서 ename 값 추출
	  // ename말고 전체 row 값을 추출 하고 싶으면 map함수 부분을 빼면 된다.
	  private List<Object> getResult(List<Map<String, Object>> resultList,  BigDecimal empno) {
			 
			 List<Object> name = resultList.stream()
					 .filter(o -> o.get("empno").equals(empno))
					 .map(o -> o.get("ename"))
			         .collect(Collectors.toList());
			 return name;
	  }
	  
	 /**
	  * Map으로 select 후 List로 받기
	  * @param studyVO - 조회할 정보가 담긴 studyVO
	  * @param model
	  * @return "resultList"
	  * @exception Exception
	  */
	  @ResponseBody
	  @RequestMapping(value = "/selectDtlMap.do")
//	  public List<Map<String, Object>> selectDtlMap(@RequestBody Map<String, Object> param) throws Exception {
		  public Map<String, Object> selectDtlMap(@RequestBody Map<String, Object> param) throws Exception {
	   
	   List<Map<String, Object>> resultList= mapService.selectBonusList(param);
	   Map<String, Object> result = mapService.selectSalgrade(param);
	   
	   //다건에다가 단건을 추가 할때
	   //1. list 첫번째 인덱스에 result를 추가 해서 resultList로 화면에 넘긴다.
//	   resultList.get(0).put("result", result);
//	   return resultList;
	   
	   //단건에다가 다건을 추가 할때
	   //1. map을 하기 때문에 put을 사용하여 list를 추가 후 result를 화면에 넘긴다.
	   result.put("resultList", resultList);
	   
	   //디비 조회 한 값에서 특정 값만 뽑아서 map으로 담고, map을 ArrayList담아서 화면으로 넘기는 것
	   //1. paramList가 arrayList이기 때문에 List<Map<String, Object>> selectDtlMap(@RequestBody ~
	   //위 형태로 해야된다. 현재는 Map이기 때문에 에러가 발생 되어 있다.
//	   List<Map<String, Object>> paramList = new ArrayList<>();
//	   Map<String, Object> resultParam = new HashMap<String, Object>();
//	   
//	   for(int i=0; i < resultList.size(); i++) {
//		   String temp = (String) resultList.get(i).get("job");
//		   
//		   resultParam.put("job", temp);
//		   
//		   paramList.add(resultParam);
//	   }
//	   
//	   return paramList;
	   
	   
	   return result;
	  
	  } 
	
	/**
	 * 그리드안에 있는 삭제 버튼 클릭 시 this로 자기 자신을 가지고 와서 필요한 변수를 담아서 자바로 넘김
	 * @param studyVO - 조회할 정보가 담긴 studyVO
	 * @param model
	 * @return "resultList"
	 * @exception Exception
	 */
	 @ResponseBody
	 @RequestMapping(value = "/deleteMap.do")
	 public Map<String, Object> deleteMap(@RequestBody Map<String, Object> param) throws Exception {
	  
	//   Log.debug("param : >>>>>>>>>>>>>>>>>>>>>" + param);
//	   return mapService.deleteMap(param);
	   return null;
	 }	 
	 
	 /**
	  * form으로 화면 이동
	  * @param studyVO - 조회할 정보가 담긴 studyVO
	  * @param model
	  * @return "resultList"
	  * @exception Exception
	  */
	  @RequestMapping(value = "/divAddDelView.do")
	  public String divAddDelView() throws Exception {
		return "divAddDel";
   	  }
	  
    /**
     * form으로 화면 이동
     * @param studyVO - 조회할 정보가 담긴 studyVO
     * @param model
     * @return "resultList"
     * @exception Exception
     */
	 @ResponseBody
     @RequestMapping(value = "/insertDivAddDel.do")
     public Map<String, Object> insertDivAddDel(@RequestBody Map<String, Object> param) throws Exception {

		 //Map으로 변수를 받아서 타입이 없다. split는 구분자","로 되어 있는 (스트링)을 나누기 때문에
		 //먼저 String변수로 map을 받아서 String으로 변환한다.
		 //그리고 split로 구분하여 string[](배열)에 담는다
		 //그리고 마지막으로 for문을 돌려서 param에 담아서 xml로 보낸다.
    	 String strEmpno = (String) param.get("empno");
    	 String[] empnoArr = strEmpno.split(",");
    	 
    	 String strGrade = (String) param.get("grade");
    	 String[] gradeArr = strGrade.split(",");
    	 
    	 Map<String, Object> result = null;
    	 
    	 //for문을 돌리면 legth가 3이다 empnoArr이 ,11,22 이렇게 되어 있다
    	 //for문에 i가 0 부터 시작을 하면 빈값이기 때문에 값을 확인 할 수 없다.
    	 //그래서 i를 1부터 시작을 하면 빈 값의 인덱스가 0이기 때문에 넘어 가고 인덱스 1부터 시작하니 11, 22 값을 추출 할 수 있다.
    	 for(int i=1; i < empnoArr.length; i++) {
    		 
    		 param.put("empno", empnoArr[i]);
    		 param.put("grade", gradeArr[i]);
    		 
    		 result =  mapService.insertDivAddDel(param);
    	 }
    	 
    	 return result;
     	
     }
	 
	 /**
	  * form으로 화면 이동
	  * @param studyVO - 조회할 정보가 담긴 studyVO
	  * @param model
	  * @return "resultList"
	  * @exception Exception
	  */
	  @RequestMapping(value = "/gridAddDelView.do")
	  public String gridAddDelView() throws Exception {
		return "gridAddDel";
   	  }
	  
	 /**
	  * form으로 화면 이동
	  * @param studyVO - 조회할 정보가 담긴 studyVO
	  * @param model
	  * @return "resultList"
	  * @exception Exception
	  */
	 @ResponseBody
	  @RequestMapping(value = "/insertCheckGrid.do")
	  public Map<String, Object> insertCheckGrid(@RequestBody Map<String, Object> param) throws Exception {

		 Map<String, Object> result = new HashMap<>();
		 
		//20230701
		// ,로 구분하여 변수로 넘어온 값 자바에서 값 추출 하여 인서트
//		 String pEmpno = (String) param.get("empno");
//		 String[] empnoArr = pEmpno.split(",");
//		 
//		 for(int i=1; i < empnoArr.length; i++) {
//			 param.put("empno", empnoArr[i]);
//			 
//		     mapService.insertCheckGrid(param);
//		 }
		 
		 //20230701
		 //화면에서 push 배열로 넘어 온 값 자바에서 값 추출 하여 인서트
//		 List<Map<String,Object>> info = new ArrayList<>();	 
//		 info= (List<Map<String,Object>>) param.get("empno");
		 
		 //위 형태로 해도 되고 아래 처럼 한줄로 해도 된다.
		 List<Map<String,Object>> info = (List<Map<String,Object>>) param.get("empno");
		 
		 for(int i=0; i <info.size(); i++) {
             System.out.println("ajax traditional result : " + i +" : "+info.get(i));
//             result = mapService.insertCheckGrid(param);
     	 }
		 
		 String test = "test";
		 param.put("test1", isNull(test, "~"));
		 Log.debug("param.get1 : >>>>>>>>>>>>>" + param.get("test1"));

		 String test2 = "";
         param.put("test2", isNull(test2, "~"));
		 Log.debug("param.get2 : >>>>>>>>>>>>>" + param.get("test2"));
		 
		 BigDecimal a = new BigDecimal("2.01");
		 BigDecimal test3 = a;
         param.put("test3", isNull(test3, "~"));
		 Log.debug("param.get3 : >>>>>>>>>>>>>" + param.get("test3"));
		 
		 BigDecimal test4 = BigDecimal.ZERO;
         param.put("test4", isNull(test4, "~"));
		 Log.debug("param.get4 : >>>>>>>>>>>>>" + param.get("test4"));
		 
	  	return result;
	  }
	 
	 //ofNullAble 함수를 사용 하여 입력값이 null일 경우 지정된 값(initData)로 반환
	 private Object isNull(Object obj, Object initData){
		 
		 Log.debug("obj : >>>>>>>>>>>>" + obj);
		 Log.debug("initData : >>>>>>>" + initData);
		 
		 //obj.getClass()은 obj의 타입을 확인한다.
		 Log.debug("obj.getClass() : >>>>>>>>>>>>>>>>" + obj.getClass());
		 
		 //obj가 null이면 orElseGet를 실행한다.
		 //orElse는 orElse("매개변수")를 쓴다
		 //orElseGet은 (() -> {}) 람다식을 쓴다.
		 //instanceof는 obj가 원래 인스트형이 맞는지를 
		
		return Optional.ofNullable(obj)
				.filter(o -> ObjectUtils.isNotEmpty(o))
				.orElseGet(() -> { 
					if(obj instanceof BigDecimal) {
						return String.valueOf(BigDecimal.ZERO);
					}else {
						return initData;
					}
				});
		 
	   }
	 
	 
	 
}
