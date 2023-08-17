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
package dudam.main.dao;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import dudam.main.vo.MainVO;

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
@Mapper("mainDAO")
public interface MainDAO {

	/**
	 * 글을 등록한다.
	 * @param vo - 등록할 정보가 담긴 SampleVO
	 * @return 등록 결과
	 * @exception Exception
	 */
//	void insertSample(SampleVO vo) throws Exception;

	/**
	 * 글을 수정한다.
	 * @param vo - 수정할 정보가 담긴 SampleVO
	 * @return void형
	 * @exception Exception
	 */
//	void updateSample(SampleVO vo) throws Exception;

	/**
	 * 글을 삭제한다.
	 * @param vo - 삭제할 정보가 담긴 SampleVO
	 * @return void형
	 * @exception Exception
	 */
//	void deleteSample(SampleVO vo) throws Exception;

	/**
	 * 글을 조회한다.
	 * @param vo - 조회할 정보가 담긴 SampleVO
	 * @return 조회한 글
	 * @exception Exception
	 */
//	SampleVO selectSample(SampleVO vo) throws Exception;

	/**
	 * 글 목록을 조회한다.
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
