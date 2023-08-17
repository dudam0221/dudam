/*
 * Copyright 2011 MOPAS(Ministry of Public Administration and Security).
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
package dudam.notice.dao;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import dudam.notice.vo.NoticeVO;

/**
 * sample에 관한 데이터처리 매퍼 클래스
 *
 * @author  표준프레임워크센터
 * @since 2014.01.24
 * @version 1.0
 * @see <pre>
 *  == 개정이력(Modification Information) ==
 *
 *          수정일          수정자           수정내용
 *  ----------------    ------------    ---------------------------
 *   2014.01.24        표준프레임워크센터          최초 생성
 *
 * </pre>
 */
@Mapper("noticeDAO")
public interface NoticeDAO {

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
	  * @return "noticeDetail"
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
