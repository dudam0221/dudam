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
package dudam.cmmn.vo;

import java.sql.Timestamp;

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

public class CmmnVO {

	private String noticeReg;
	
	/** 제품분류 코드 */
	private Timestamp noticeRegDt;
	
	private String noticeUpd;
	
	private Timestamp noticeUpdDt;
	
	public String getNoticeReg() {
		return noticeReg;
	}

	public void setNoticeReg(String noticeReg) {
		this.noticeReg = noticeReg;
	}

	public Timestamp getNoticeRegDt() {
		return noticeRegDt;
	}

	public void setNoticeRegDt(Timestamp noticeRegDt) {
		this.noticeRegDt = noticeRegDt;
	}

	public String getNoticeUpd() {
		return noticeUpd;
	}

	public void setNoticeUpd(String noticeUpd) {
		this.noticeUpd = noticeUpd;
	}

	public Timestamp getNoticeUpdDt() {
		return noticeUpdDt;
	}

	public void setNoticeUpdDt(Timestamp noticeUpdDt) {
		this.noticeUpdDt = noticeUpdDt;
	}
	
}
