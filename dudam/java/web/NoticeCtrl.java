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
package dudam.notice.web;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.egovframe.rte.fdl.property.EgovPropertyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springmodules.validation.commons.DefaultBeanValidator;

import dudam.notice.service.NoticeService;
import dudam.notice.vo.NoticeVO;

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
public class NoticeCtrl {

	/** EgovSampleService */
	@Resource(name = "noticeService")
	private NoticeService noticeService;

	/** EgovPropertyService */
	@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;
	
	private static final Logger Log = LoggerFactory.getLogger(NoticeCtrl.class);

	 /**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	  @RequestMapping(value = "/noticeList.do")
	  public String noticeList(NoticeVO noticeVO, Model model, HttpSession session) throws Exception {

		List<Map<String, Object>> noticeList = noticeService.selectNoticeList(noticeVO);

		model.addAttribute("resultList", noticeList);
		return "noticeList";
	}
	
	  /**
		* 공지사항 상세화면을 조회한다.
		* @param noticeVO - 조회할 정보가 담긴 noticeVO
		* @param model
		* @return "noticeDetail"
		* @exception Exception
		*/
		@RequestMapping(value = "/noticeDetail.do")
		public String noticeDetail(NoticeVO noticeVO, Model model) throws Exception {
			  
		noticeVO = noticeService.selectNoticeDetail(noticeVO);
		
		model.addAttribute("result", noticeVO);
		return "noticeDetail";
	}  
		
   /*
	* 공지사항 등록화면으로 이동 한다.
	* @param noticeVO - 조회할 정보가 담긴 noticeVO
	* @param model
	* @return "noticeDetail"
	* @exception Exception
	*/
		@RequestMapping(value = "/noticeRegView.do")
		public String noticeRegView(NoticeVO noticeVO, Model model) throws Exception {
		return "noticeReg";
	}  	
		
	  /**
		* 공지사항 등록한다.
		* @param noticeVO - 조회할 정보가 담긴 noticeVO
		* @param model
		* @return "noticeList"
		* @exception Exception
		*/
		@RequestMapping(value = "/noticeReg.do")
		public String noticeReg(NoticeVO noticeVO, Model model) throws Exception {
			try {
				
				int noticeReg = noticeService.insertNotice(noticeVO);
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		return "redirect:/noticeList.do";
	}  		
		
	  /**
		* 공지사항 수정한다.
		* @param noticeVO - 조회할 정보가 담긴 noticeVO
		* @param model
		* @return "noticeList"
		* @exception Exception
		*/
		@RequestMapping(value = "/noticeUpd.do")
		public String noticeUpd(@ModelAttribute NoticeVO noticeVO, ModelMap model) throws Exception {
			
			try {
				int noticeUpd = noticeService.updateNotice(noticeVO);
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		return "redirect:/noticeList.do";
	}  		
		
	  /**
		* 공지사항 삭제한다.
		* @param noticeVO - 조회할 정보가 담긴 noticeVO
		* @param model
		* @return "noticeList"
		* @exception Exception
		*/
		@RequestMapping(value = "/noticeDel.do")
		public String noticeDel(NoticeVO noticeVO, Model model) throws Exception {
			
			try {
				
				int noticeDel = noticeService.deleteNotice(noticeVO);
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		return "redirect:/noticeList.do";
	}  			
	  

		/**
		* 아작스로 자바로 변수들을 넘겨 받아서 화면에 있는 고정된 텍스트 박스에 값을 넣어준다.
		* @param noticeVO - 조회할 정보가 담긴 noticeVO
		* @param model
		* @return "noticeDetail"
		* @exception Exception
		*/
		//아작스에서 자바로 넘어 왔을 때 @ResponseBody이 있어야지 화면으로 데이터를 넘겨준다. 2023-02-18
		@ResponseBody
		@RequestMapping(value = "/noticeDetailInfo.do")
		public Map<String, Object> noticeDetailInfo(@RequestParam Map<String, Object> param) throws Exception {
			Map<String, Object> result= noticeService.selectNoticeDetailInfo(param);
		
		return result;
	}
		
 /**
   * 아작스로 셀렉트 박스에 값 넣어 주기
   * @param noticeVO - 조회할 정보가 담긴 noticeVO
   * @param model
   * @return "noticeList"
   * @exception Exception
   */
   //아작스에서 java 호출 시 
   //자바 : @RequestBody, @ResponseBody, @PostMapping
   //아작스 : data를 JSON.stringify(data), contentType : "application/json", 있어야한다.
   //2023-02-22 위에 조건이 충족이 되어야함
   @ResponseBody
   @PostMapping(value = "/selectBoxNoticeList.do")
   public List<Map<String, Object>> selectBoxNoticeList(@RequestBody Map<String, Object> param) throws Exception {
 	List<Map<String, Object>> resultList = noticeService.selectBoxNoticeList(param);
 
 	return resultList;
 }
   
 /**
  * 아작스로 라디오 버튼 값 가져와서 자바로 값 넘기기
  * @param param - 조회할 정보가 담긴 param
  * @param 
  * @return "noticeList"
  * @exception Exception
  */
  //아작스에서 java 호출 시 
  //자바 : @RequestBody, @ResponseBody, @PostMapping
  //아작스 : data를 JSON.stringify(data), contentType : "application/json", 있어야한다.
  //2023-02-22 위에 조건이 충족이 되어야함
  @ResponseBody
  @PostMapping(value = "/insertRadio.do")
  public int insertRadio(@RequestBody Map<String, Object> param) throws Exception {
   
   //int result = noticeService.insertRadio(param);
   int result = 1;
 		  
 		return result;
 	 }
 	 
 /**
	 * 아작스로 체크박스 값 가져와서 자바로 값 넘기기
	 * @param param - 조회할 정보가 담긴 param
	 * @param 
	 * @return "noticeList"
	 * @exception Exception
	 */
	 //아작스에서 java 호출 시 
	 //자바 : @RequestBody, @ResponseBody, @PostMapping
	 //아작스 : data를 JSON.stringify(data), contentType : "application/json", 있어야한다.
	 //2023-02-22 위에 조건이 충족이 되어야함
	 @ResponseBody
	 @PostMapping(value = "/insertCheck.do")
	 public int insertCheck(@RequestBody Map<String, Object> param) throws Exception {
	  
		 Log.debug("param : >>>>>>>>>>>>>>>" + param);
		  //int result = noticeService.insertRadio(param);
		  int result = 1;
		  
		return result;
	 } 
	 
 /**
	 * 아작스로 셀렉트박스 값 가져와서 자바로 값 넘기기
	 * @param param - 조회할 정보가 담긴 param
	 * @param 
	 * @return "noticeList"
	 * @exception Exception
	 */
	 //아작스에서 java 호출 시 
	 //자바 : @RequestBody, @ResponseBody, @PostMapping
	 //아작스 : data를 JSON.stringify(data), contentType : "application/json", 있어야한다.
	 //2023-02-22 위에 조건이 충족이 되어야함
	 @ResponseBody
	 @PostMapping(value = "/selectBoxInsert.do")
	 public int selectBoxInsert(@RequestBody Map<String, Object> param) throws Exception {

		 //int result = noticeService.insertRadio(param);
		  int result = 1;
		  
		return result;
	 } 
	 
 /**
	 * form태그안에 있는 값을 아작스로 자바로 넘기기
	 * @param param - 조회할 정보가 담긴 param
	 * @param 
	 * @return "noticeList"
	 * @exception Exception
	 */
	 //아작스에서 java 호출 시 
	 //자바 : @RequestBody, @ResponseBody, @PostMapping
	 //아작스 : data를 JSON.stringify(data), contentType : "application/json", 있어야한다.
	 //2023-02-22 위에 조건이 충족이 되어야함
	 @ResponseBody
	 @PostMapping(value = "/allBtnFunInsert.do")
	 public int allBtnFunInsert(@RequestBody Map<String, Object> param) throws Exception {
		 
		 System.out.println("param2 : >>>>>>>>>>" + param);
		 
//		 List<Map<String,Object>> info = new ArrayList<>();	 
//		 info= (List<Map<String,Object>>) param.get("chk");
//
//		 // Log.debug("arr : >>>>>>>>>>>" + arr);
//		 
//		 for(int i=0; i <info.size(); i++) {
//             System.out.println("ajax traditional result : " + i +" : "+info.get(i));
//             
//             
//     	    }
		 
		  //int result = noticeService.insertRadio(param);
		  int result = 1;
		  
		return result;
	 }
				 
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
  @PostMapping(value = "/selectProdMasterList.do")
  public List<Map<String, Object>> selectProdMasterList(@RequestBody Map<String, Object> param) throws Exception {
	List<Map<String, Object>> resultList = noticeService.selectProdMasterList(param);

	return resultList;
}
	
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
	  @PostMapping(value = "/selectProdDetailList.do")
	  public List<Map<String, Object>> selectProdDetailList(@RequestBody Map<String, Object> param) throws Exception {
		List<Map<String, Object>> resultList = noticeService.selectProdDetailList(param);

		return resultList;
	} 
	  
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
	  @PostMapping(value = "/selectInitcmmnList.do")
	  public List<Map<String, Object>> selectInitcmmnList(@RequestBody Map<String, Object> param) throws Exception {
		List<Map<String, Object>> resultList = noticeService.selectInitcmmnList(param);

		return resultList;
	} 	  
	  
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
		  @PostMapping(value = "/selectUpperMainList.do")
		  public List<Map<String, Object>> selectUpperMainList(@RequestBody Map<String, Object> param) throws Exception {
			
			List<Map<String, Object>> resultList = noticeService.selectUpperMainList(param);

			return resultList;
		} 
		  
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
	  @PostMapping(value = "/selectLowerMainList.do")
	  public List<Map<String, Object>> selectLowerMainList(@RequestBody Map<String, Object> param) throws Exception {
		  
		List<Map<String, Object>> resultList = noticeService.selectLowerMainList(param);

		return resultList;
	} 	
	  
	  
	  /**
		* 공지사항 등록화면으로 이동 한다.
		* @param noticeVO - 조회할 정보가 담긴 noticeVO
		* @param model
		* @return "noticeDetail"
		* @exception Exception
		*/
		@RequestMapping(value = "/showPopUp.do")
		public String showPopUp(NoticeVO noticeVO, Model model) throws Exception {
		return "showPopUp";
	} 

    /**
      * 스크롤페이징 화면이동지사항 목록을 조회한다.
      * @param noticeVO - 조회할 정보가 담긴 noticeVO
      * @param model
      * @return "scrollPaging"
      * @exception Exception
      */
      @RequestMapping(value = "/scrollPaging.do")
      public String scrollPaging(NoticeVO noticeVO, Model model, HttpSession session) throws Exception {
    
    	List<Map<String, Object>> noticeList = noticeService.selectNoticeListPaging(noticeVO);
    
    	model.addAttribute("resultList", noticeList);
    	return "scrollPaging";
    }	
      
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
 	  @PostMapping(value = "/scrollPagingResult.do")
 	  public List<Map<String, Object>> scrollPagingResult(@RequestBody Map<String, Object> param) throws Exception {
 		  
 		//@RequestBody로 값을 받을 때는 아래와 같이 캐스팅을 해야 한다.
 		int liCnt = (int) param.get("startNum"); 
 		Log.debug("liCnt : >>>>>>>>>>>>>>>>>>>>>>" + liCnt);
 		int startNum = liCnt + 1;
 		int endNum = liCnt + 4;

 		param.put("startNum", startNum);
 		param.put("endNum", endNum);
 		
 		//답례품 더 보기 조회
 		List<Map<String, Object>> result = noticeService.scrollPagingResult(param);
 		Log.debug("result.size() : >>>>>>>>>>>>>>>>>>>>> " + result.size());
 		//답례품 총 수량 조회
// 		Map<String, Object> mainProductCnt = noticeService.selectScrollPagingResultCnt(param);
// 		
// 		Map<String, Object> map = new HashMap<String, Object>();
// 		
// 		for(int i=0; i < result.size(); i++) {
// 			if(mainProductCnt.get("thankscnt").equals(result.get(i).get("rowNum"))) {
// 				map.put("more", "N");
// 			}
// 		}
 		
// 		result.add(map);
 		
 	    return result;
// 	    return null;

 	} 	
 	  
 	 /*
 		* 공지사항 등록화면으로 이동 한다.
 		* @param noticeVO - 조회할 정보가 담긴 noticeVO
 		* @param model
 		* @return "noticeDetail"
 		* @exception Exception
 		*/
 			@RequestMapping(value = "/serialize.do")
 			public String serialize(NoticeVO noticeVO, Model model) throws Exception {
 			return "serialize";
 		}
}
