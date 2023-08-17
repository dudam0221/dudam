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
package dudam.notice.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.egovframe.rte.fdl.cmmn.EgovAbstractServiceImpl;
import org.egovframe.rte.fdl.idgnr.EgovIdGnrService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import dudam.notice.dao.NoticeDAO;
import dudam.notice.service.NoticeService;
import dudam.notice.vo.NoticeVO;

/**
 * @Class Name : EgovSampleServiceImpl.java
 * @Description : Sample Business Implement Class
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
@Service("noticeService")
public class NoticeServiceImpl extends EgovAbstractServiceImpl implements NoticeService {

	private static final Logger LOGGER = LoggerFactory.getLogger(NoticeServiceImpl.class);

	// TODO mybatis 사용
	  @Resource(name="noticeDAO")
		private NoticeDAO noticeDAO;

	/** ID Generation */
	@Resource(name = "egovIdGnrService")
	private EgovIdGnrService egovIdGnrService;


	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	@Override
	public List<Map<String, Object>> selectNoticeList(NoticeVO noticeVO) throws Exception {
		return noticeDAO.selectNoticeList(noticeVO);
	}
	
	/**
	  * 공지사항 상세화면을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeDetail"
	  * @exception Exception
	  */
	@Override
	public NoticeVO selectNoticeDetail(NoticeVO noticeVO) throws Exception {
		return noticeDAO.selectNoticeDetail(noticeVO);
	}
	
	/**
	  * 공지사항 등록한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	@Override
	public int insertNotice(NoticeVO noticeVO) throws Exception {
		return noticeDAO.insertNotice(noticeVO);
	}
	
	/**
	  * 공지사항 수정한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	@Override
	public int updateNotice(NoticeVO noticeVO) throws Exception {
		return noticeDAO.updateNotice(noticeVO);
	}
	
	/**
	  * 공지사항 삭제한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	@Override
	public int deleteNotice(NoticeVO noticeVO) throws Exception {
		return noticeDAO.deleteNotice(noticeVO);
	}

	/**
	* 아작스로 자바로 변수들을 넘겨 받아서 화면에 있는 고정된 텍스트 박스에 값을 넣어준다.
	* @param param - 조회할 정보가 담긴 param
	* @param 
	* @return "noticeList"
	* @exception Exception
	*/
	@Override
	public Map<String, Object> selectNoticeDetailInfo(Map<String, Object> param) throws Exception {
		
		if(LOGGER.isDebugEnabled()) {
			LOGGER.debug("2 : >>>>>>>>>>>>>>>>>>>>>>");	
		}
		
		return noticeDAO.selectNoticeDetailInfo(param);
	}

	/**
	* 아작스로 셀렉트 박스에 값 넣어 주기
	* @param param - 조회할 정보가 담긴 param
	* @param 
	* @return "noticeList"
	* @exception Exception
	*/
	@Override
	public List<Map<String, Object>> selectBoxNoticeList(Map<String, Object> param) throws Exception {
		return noticeDAO.selectBoxNoticeList(param);
	}

	/**
	  * 아작스로 라디오 버튼 값 가져와서 자바로 값 넘기기
	  * @param param - 조회할 정보가 담긴 param
	  * @param 
	  * @return "noticeList"
	  * @exception Exception
	  */
	@Override
	public int insertRadio(Map<String, Object> param) throws Exception {
		return noticeDAO.insertRadio(param);
	}

	@Override
	public List<Map<String, Object>> selectProdMasterList(Map<String, Object> param) throws Exception {
		return noticeDAO.selectProdMasterList(param);
	}
	
	@Override
	public List<Map<String, Object>> selectProdDetailList(Map<String, Object> param) throws Exception {
		return noticeDAO.selectProdDetailList(param);
	}
	
	@Override
	public List<Map<String, Object>> selectInitcmmnList(Map<String, Object> param) throws Exception {
		return noticeDAO.selectInitcmmnList(param);
	}
	
	@Override
	public List<Map<String, Object>> selectUpperMainList(Map<String, Object> param) throws Exception {
		return noticeDAO.selectUpperMainList(param);
	}
	
	@Override
	public List<Map<String, Object>> selectLowerMainList(Map<String, Object> param) throws Exception {
		return noticeDAO.selectLowerMainList(param);
	}
	
	@Override
	public List<Map<String, Object>> selectNoticeListPaging(NoticeVO noticeVO) throws Exception {
		return noticeDAO.selectNoticeListPaging(noticeVO);
	}
	
	@Override
	public List<Map<String, Object>> scrollPagingResult(Map<String, Object> param) throws Exception {
		return noticeDAO.scrollPagingResult(param);
	}

}
