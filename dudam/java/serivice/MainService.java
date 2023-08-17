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
package dudam.main.service;

import java.util.List;
import java.util.Map;

import dudam.main.vo.MainVO;

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
public interface MainService {

	/**
	 * 글을 등록한다.
	 * @param vo - 등록할 정보가 담긴 SampleVO
	 * @return 등록 결과
	 * @exception Exception
	 */
//	String insertSample(MainVO vo) throws Exception;

	/**
	 * 글을 수정한다.
	 * @param vo - 수정할 정보가 담긴 SampleVO
	 * @return void형
	 * @exception Exception
	 */
//	void updateSample(MainVO vo) throws Exception;

	/**
	 * 글을 삭제한다.
	 * @param vo - 삭제할 정보가 담긴 SampleVO
	 * @return void형
	 * @exception Exception
	 */
//	void deleteSample(MainVO vo) throws Exception;

	/**
	 * 글을 조회한다.
	 * @param vo - 조회할 정보가 담긴 SampleVO
	 * @return 조회한 글
	 * @exception Exception
	 */
//	MainVO selectSample(MainVO vo) throws Exception;

	/**
	 * 메인화면 로딩시 각각의 제품을 조회한다.
	 * @param searchVO - 조회할 정보가 담긴 VO
	 * @return 글 목록
	 * @exception Exception
	 */
	List<Map<String, Object>> selectMainList(MainVO mainVO) throws Exception;
	
	/**
	 * 메인화면 로딩시 각각의 제품을 조회한다.
	 * @param searchVO - 조회할 정보가 담긴 VO
	 * @return 글 목록
	 * @exception Exception
	 */
	Map<String, Object> selectmainProductCnt(Map<String, Object> param) throws Exception;
	
	/**
	 * 메인화면 로딩시 각각의 제품을 조회한다.(수제청을 위해서 새로 만듬 파라미터가 VO파일이기 때문)
	 * @param searchVO - 조회할 정보가 담긴 VO
	 * @return 글 목록
	 * @exception Exception
	 */
	Map<String, Object> selectDrinkProductCnt(MainVO mainVO) throws Exception;
	
	/**
	 * 케이크 더 보기 조회한다.
	 * @param param - 조회할 정보가 담긴 param(@RequestParam)
	 * @return 케이크 더 보기
	 * @exception Exception
	 */
	List<Map<String, Object>> selectcakeMoreList(Map<String, Object> param) throws Exception;
	
	/**
	 * 수제청 더 보기 조회한다.
	 * @param mainVO - 조회할 정보가 담긴 VO(MainVO)
	 * @return 수제청 더 보기
	 * @exception Exception
	 */
	List<Map<String, Object>> selectdrinkMoreList(MainVO mainVO) throws Exception;
	
	/**
	 * 답례품 더 보기 조회한다.
	 * @param param - 조회할 정보가 담긴 param(@RequestBody)
	 * @return 답례품 더 보기
	 * @exception Exception
	 */
	List<Map<String, Object>> selectThanksMoreList(Map<String, Object> param) throws Exception;

	/**
	 * 수제청 더 보기 조회한다.
	 * @param mainVO - 조회할 정보가 담긴 VO(MainVO)
	 * @return 수제청 더 보기
	 * @exception Exception
	 */
	Map<String, Object> selectproductDetail(MainVO mainVO) throws Exception;
	
	/**
	 * 글 총 갯수를 조회한다.
	 * @param searchVO - 조회할 정보가 담긴 VO
	 * @return 글 총 갯수
	 * @exception
	 */
//	int selectSampleListTotCnt(SampleDefaultVO searchVO);

}
