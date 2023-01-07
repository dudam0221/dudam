//selectKey
{/* <insert>
<selectKey order="BEFORE" keyProperty="ceckTrgetNo" resultType="BigDecimal">
    select nextVal('seq_reits_ceck_trget_reits')
</selectKey>
insert into reits_ceck_trget_reits
(ceck_trget_reits_no
,ceck_regstr_no
) values(
    #{ceckTrgetReitsNo}
    ,#{ceckRegstrNo}
) 
</insert>
*/}

//if 조건 절에 변수 값은 화면에서 넘어오는 조회조건 값

{/* <if test='srchCeckKnd !=null and srchCeckKnd !=""'>
and ceck_knd = #{srchCeckKnd}
</if> */}

//여러개 행을 한개 행으로 나타내기
//select t1.seqNo
// max(case when t1.a = 'A01') then t1.b
// else 0
// end) as cashAssets 
// from testTable t1
// where 1=1
// group by t1.seqNo

//in 절안에 동적으로 값 넣기 foreach
// select t1.seqNo
//      , t1.nm
// from testTable t1
// where t1.seqNo in(
//       <foreach item="item" index="index" collection="arrTemp" open="("seperator="," close=")">
//         cast(#(item) as integer)
//       </foreach>
//      )
