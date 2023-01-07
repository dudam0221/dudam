//vo 파일 선언
// EstateInvtCmpny estateInvtCmpny = new EstateInvtCmpny();

//List<EstateInvtCmpny> list = new ArrayList<>();

const { param, map } = require("jquery");

//null값 체크
//ofNullable은 입력 값이 null, not null인지 체크
//orElseGet은 null일때만 부른다.
// obj가 not null 이면 그냥 obj를 반환한다. obj가 null이면 orElseGet 함수를 호출 한다.

// param.setseqNo((BigDecimal) isNullThen(param.getArrayList().get(i).getSeqNo(),"0"));
// private Object isNullThen(Object Obj, Object ininData){
//    return Optional.ofNullable(obj)
//           .filter(obj -> !ObjectUtils.isEmpty(obj))
//           .orElseGet(() -> {
//             if(obj instanceof BigDecimal){
//                 return String.valueOf(BigDecimal.ZERO);
//             }else{
//                 return ininData;
//             }
//           }); 
// }

//함수를 만들어서 list에 특정 컬럼 값을 뽑아서 반환
// public BigDecimal getMapBySrchList(List<Map<String,Object>> sharpRatioList, String sGibPdCd, GPMDomain GPMDomain) throw Exception{
//     BigDecimal ratio = BigDecimal.ZERO;
//     try {
//         ratio = sharpRatioList.stream()
//         .filter(o -> o.get("CLSF_ID").equals("sGibPdCd"))
//         .map(String::valueOf)
//         .map(BigDecimal::new)
//         .orElseGet(() -> BigDecimal.ZERO)
//     } catch (error) {
//         throw new Exception(e);
//     }finally{
//         Log.debug("[finally] : >{}", this.getClass());
//     }

//     return ratio;
// }
// String sGibPdCd = "CLSF_ID";
// List<Map<String, Object>> sharpRatio = getMapBySrchList(sharpRatioList,sGibPdCd);

//리스트에 있는 것에 조건 true때 특정 값 뽑아 오기
//List<Map<String, Object>> dtSelect = dsGpm.selectList("dgbgpm.imo.ipe.ipe100.IPE5301M01SQL.selectIPE5301M01SVC001",dma_search);

//String crdt = dtSelect.stream.filter(o->o.get("GIB_PD_CD").equals("FI_TR"))
//                             .findFirst() 
//                             .map(o->o.getOrDefault("CRDT","~"))
//                             .map(String::valueOf)                -> string으로 변환
//                             .map(String::new)                    -> heap 메모리에 새로운 객체 생성
//                             .orElseGet(()->"~");
//valueOf 함수는=> 파라미터가 null이면 문자열 "null"을 만들어서 반환

// ceckVO 에 있는 seqNo를 ceckTrgetVO VO seqNo에 넣는 함수 만들기
//public class ceckTrgetVO extend CmmVO{
//    private BigDecimal seqNo;
//    private string nm;
//    private List<ceckTrgetVO> ceckTrgetList;
    
    //생성자
//    public ceckTrgetVO(BigDecimal seqNo, String nm){
//        this.seqNo = seqNo;
//        this.nm = nm;
//    }

//    public updateSeqNo(final BigDecimal seqNo){
//        this.seqNo = seqNo;
//    }
//}
//updateSeqNo().set(ceckTrgetVO.get(seqNo));

//<select id="temp" parameterType="ceckTrgetVO" resultType="ceckTrgetVO"></select>

// ceckVO에 ceckTrgetVO파일 넣기
//list.get(0).setCeckTrgetList(ceckSVC.selectCeck(param));

//조회 되어온 값이 list, for문을 실행 하여 필요한 값만 뽑아 리스트에 담아 화면으로 넘길때
//List<Map<String, Object>> tmpList = tmpSVC.selectTmpList(param);

//List<Map<String, Object>> paramList = new ArrayList<>();
//Map<String, Object> map = new HashMap<String, Object>();
//for(int i=0; i < tmpList.size(); i++){
//    String param1 = tmpList.get(i).get("a");
//    String param2 = tmpList.get(i).get("b");

//    map.put("param1", param1);
//    map.put("param2", param2);

//    paramList.add(map);
//}

//tmpList.forEach((item, index) => {
//    String param1 = tmpList.get(index).get("a");
//    String param2 = tmpList.get(index).get("b");

//    map.put("param1", param1);
//    map.put("param2", param2);

//    paramList.add(map);
//});