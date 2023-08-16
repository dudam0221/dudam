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
package dudam.study.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.egovframe.rte.fdl.cmmn.EgovAbstractServiceImpl;
import org.egovframe.rte.fdl.idgnr.EgovIdGnrService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import dudam.study.dao.StudyDAO;
import dudam.study.service.StudyService;
import dudam.study.vo.BonusVO;
import dudam.study.vo.SalgradeVO;
import dudam.study.vo.StudyVO;

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
@Service("studyService")
public class StudyServiceImpl extends EgovAbstractServiceImpl implements StudyService {

	private static final Logger LOGGER = LoggerFactory.getLogger(StudyServiceImpl.class);

	// TODO mybatis 사용
	  @Resource(name="studyDAO")
		private StudyDAO studyDAO;

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
	public List<StudyVO> selectSerialize(StudyVO studyVO) throws Exception {
		return studyDAO.selectSerialize(studyVO);
	}
	
	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	@Override
	public StudyVO selectDtlSerialize(StudyVO studyVO) throws Exception {
		return studyDAO.selectDtlSerialize(studyVO);
	}
	
	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	@Override
	public List<StudyVO> selectDeptList(StudyVO studyVO) throws Exception {
		return studyDAO.selectDeptList(studyVO);
	}

	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	@Override
	public List<BonusVO> selectBonusList(StudyVO studyVO) throws Exception {
		return studyDAO.selectBonusList(studyVO);
	}
	
	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	@Override
//	public List<SalgradeVO> selectSalgrade(StudyVO studyVO) throws Exception {
		public SalgradeVO selectSalgrade(StudyVO studyVO) throws Exception {
		return studyDAO.selectSalgrade(studyVO);
	}
}
