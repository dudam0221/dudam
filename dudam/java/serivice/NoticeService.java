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
package dudam.notice.service;

import java.util.List;
import java.util.Map;

import dudam.notice.vo.NoticeVO;

/**
 * @Class Name : EgovSampleService.java
 * @Description : EgovSampleService Class
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
public interface NoticeService {

	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	List<Map<String, Object>> selectNoticeList(NoticeVO noticeVO) throws Exception;
	
	 /**
	  * 공지사항 상세화면을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeDetail"
	  * @exception Exception
	  */
	NoticeVO selectNoticeDetail(NoticeVO noticeVO) throws Exception;
	
	/**
	  * 공지사항 등록한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	int insertNotice(NoticeVO noticeVO) throws Exception;
	
	/**
	  * 공지사항 수정한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	int updateNotice(NoticeVO noticeVO) throws Exception;
	
	/**
	  * 공지사항 삭제한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	int deleteNotice(NoticeVO noticeVO) throws Exception;
	
	/**
	  * 아작스로 자바로 변수들을 넘겨 받아서 화면에 있는 고정된 텍스트 박스에 값을 넣어준다.
	  * @param param - 조회할 정보가 담긴 param
	  * @param 
	  * @return "noticeList"
	  * @exception Exception
	  */
	Map<String, Object> selectNoticeDetailInfo(Map<String, Object> param) throws Exception;
	
	/**
	  * 아작스로 셀렉트 박스에 값 넣어 주기
	  * @param param - 조회할 정보가 담긴 param
	  * @param 
	  * @return "noticeList"
	  * @exception Exception
	  */
	List<Map<String, Object>> selectBoxNoticeList(Map<String, Object> param) throws Exception;
	
	/**
	  * 아작스로 라디오 버튼 값 가져와서 자바로 값 넘기기
	  * @param param - 조회할 정보가 담긴 param
	  * @param 
	  * @return "noticeList"
	  * @exception Exception
	  */
	int insertRadio(Map<String, Object> param) throws Exception;
	
	List<Map<String, Object>> selectProdMasterList (Map<String, Object> param) throws Exception;
	
	List<Map<String, Object>> selectProdDetailList (Map<String, Object> param) throws Exception;
	
	List<Map<String, Object>> selectInitcmmnList (Map<String, Object> param) throws Exception;
	
	List<Map<String, Object>> selectUpperMainList (Map<String, Object> param) throws Exception;
	
	List<Map<String, Object>> selectLowerMainList (Map<String, Object> param) throws Exception;
	
	List<Map<String, Object>> selectNoticeListPaging (NoticeVO noticeVO) throws Exception;
	
	List<Map<String, Object>> scrollPagingResult (Map<String, Object> param) throws Exception;

}
