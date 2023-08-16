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
package dudam.study.vo;

import java.util.List;

import dudam.cmmn.vo.CmmnVO;

/**
 * @Class Name : SampleVO.java
 * @Description : SampleVO Class
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

public class SalgradeVO extends CmmnVO {
	
		private String empno;
		private String grade;
		private String losal;
		private String hisal;
		
		public String getEmpno() {
			return empno;
		}
		public void setEmpno(String empno) {
			this.empno = empno;
		}
		public String getGrade() {
			return grade;
		}
		public void setGrade(String grade) {
			this.grade = grade;
		}
		public String getLosal() {
			return losal;
		}
		public void setLosal(String losal) {
			this.losal = losal;
		}
		public String getHisal() {
			return hisal;
		}
		public void setHisal(String hisal) {
			this.hisal = hisal;
		}
		
		private List<BonusVO> resultList;

		public List<BonusVO> getResultList() {
			return resultList;
		}
		public void setResultList(List<BonusVO> resultList) {
			this.resultList = resultList;
		}
		
		
	
}
