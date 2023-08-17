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
package dudam.map.dao;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

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
@Mapper("mapDAO")
public interface MapDAO {

	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	List<Map<String, Object>> selectMapList(Map<String, Object> param) throws Exception;
	
	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	List<Map<String, Object>> selectBonusList(Map<String, Object> param) throws Exception;
	
	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	Map<String, Object> selectSalgrade(Map<String, Object> param) throws Exception;
	
	/**
	  * 공지사항 목록을 조회한다.
	  * @param noticeVO - 조회할 정보가 담긴 noticeVO
	  * @param model
	  * @return "noticeList"
	  * @exception Exception
	  */
	Map<String, Object> insertDivAddDel(Map<String, Object> param) throws Exception;
}
