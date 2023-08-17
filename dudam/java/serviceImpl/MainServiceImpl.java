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
package dudam.main.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.egovframe.rte.fdl.cmmn.EgovAbstractServiceImpl;
import org.egovframe.rte.fdl.idgnr.EgovIdGnrService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import dudam.main.dao.MainDAO;
import dudam.main.service.MainService;
import dudam.main.vo.MainVO;

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

@Service("mainService")
public class MainServiceImpl extends EgovAbstractServiceImpl implements MainService {

	private static final Logger LOGGER = LoggerFactory.getLogger(MainServiceImpl.class);

	// TODO mybatis 사용
	  @Resource(name="mainDAO")
		private MainDAO mainDAO;

	/** ID Generation */
	@Resource(name = "egovIdGnrService")
	private EgovIdGnrService egovIdGnrService;

	/**
	 * 글을 등록한다.
	 * @param vo - 등록할 정보가 담긴 SampleVO
	 * @return 등록 결과
	 * @exception Exception
	 */
//	@Override
//	public String insertSample(SampleVO vo) throws Exception {
//		LOGGER.debug(vo.toString());
//
//		/** ID Generation Service */
//		String id = egovIdGnrService.getNextStringId();
//		vo.setId(id);
//		LOGGER.debug(vo.toString());
//
//		sampleDAO.insertSample(vo);
//		return id;
//	}

	/**
	 * 글을 수정한다.
	 * @param vo - 수정할 정보가 담긴 SampleVO
	 * @return void형
	 * @exception Exception
	 */
//	@Override
//	public void updateSample(SampleVO vo) throws Exception {
//		sampleDAO.updateSample(vo);
//	}

	/**
	 * 글을 삭제한다.
	 * @param vo - 삭제할 정보가 담긴 SampleVO
	 * @return void형
	 * @exception Exception
	 */
//	@Override
//	public void deleteSample(SampleVO vo) throws Exception {
//		sampleDAO.deleteSample(vo);
//	}

	/**
	 * 글을 조회한다.
	 * @param vo - 조회할 정보가 담긴 SampleVO
	 * @return 조회한 글
	 * @exception Exception
	 */
//	@Override
//	public SampleVO selectSample(SampleVO vo) throws Exception {
//		SampleVO resultVO = sampleDAO.selectSample(vo);
//		if (resultVO == null)
//			throw processException("info.nodata.msg");
//		return resultVO;
//	}

	/**
	 * 메인화면 로딩시 각각의 제품을 조회한다.
	 * @param searchVO - 조회할 정보가 담긴 VO
	 * @return 글 목록
	 * @exception Exception
	 */
	@Override
	public List<Map<String, Object>> selectMainList(MainVO mainVO) throws Exception {
		return mainDAO.selectMainList(mainVO);
	}
	
	/**
	 * 메인화면 로딩시 각각의 제품을 조회한다.
	 * @param searchVO - 조회할 정보가 담긴 VO
	 * @return 글 목록
	 * @exception Exception
	 */
	@Override
	public Map<String, Object> selectmainProductCnt(Map<String, Object> param) throws Exception {
		return mainDAO.selectmainProductCnt(param);
	}
	
	/**
	 * 메인화면 로딩시 각각의 제품을 조회한다.
	 * @param searchVO - 조회할 정보가 담긴 VO
	 * @return 글 목록
	 * @exception Exception
	 */
	@Override
	public Map<String, Object> selectDrinkProductCnt(MainVO mainVO) throws Exception {
		return mainDAO.selectDrinkProductCnt(mainVO);
	}
	
	/**
	 * 케이크 더 보기 조회한다.
	 * @param param - 조회할 정보가 담긴 param(@RequestParam)
	 * @return 케이크 더 보기
	 * @exception Exception
	 */
	@Override
	public List<Map<String, Object>> selectcakeMoreList(Map<String, Object> param) throws Exception {
		return mainDAO.selectcakeMoreList(param);
	}
	
	/**
	 * 수제청 더 보기 조회한다.
	 * @param mainVO - 조회할 정보가 담긴 VO(MainVO)
	 * @return 수제청 더 보기
	 * @exception Exception
	 */
	@Override
	public List<Map<String, Object>> selectdrinkMoreList(MainVO mainVO) throws Exception {
		return mainDAO.selectdrinkMoreList(mainVO);
	}
	
	/**
	 * 답례품 더 보기 조회한다.
	 * @param param - 조회할 정보가 담긴 param(@RequestBody)
	 * @return 답례품 더 보기
	 * @exception Exception
	 */
	@Override
	public List<Map<String, Object>> selectThanksMoreList(Map<String, Object> param) throws Exception {
		System.out.println("3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		return mainDAO.selectThanksMoreList(param);
	}
	
	/**
	 * 수제청 더 보기 조회한다.
	 * @param mainVO - 조회할 정보가 담긴 VO(MainVO)
	 * @return 수제청 더 보기
	 * @exception Exception
	 */
	@Override
	public Map<String, Object> selectproductDetail(MainVO mainVO) throws Exception {
		return mainDAO.selectproductDetail(mainVO);
	}

	/**
	 * 글 총 갯수를 조회한다.
	 * @param searchVO - 조회할 정보가 담긴 VO
	 * @return 글 총 갯수
	 * @exception
	 */
//	@Override
//	public int selectSampleListTotCnt(SampleDefaultVO searchVO) {
//		return sampleDAO.selectSampleListTotCnt(searchVO);
//	}

}
