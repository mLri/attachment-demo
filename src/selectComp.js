function selectComp({ universityIndex = 0, campusIndex = 0, dataList = [], value = '', index = '', handleChangeFunc = () => {}, handleAddFunc = () => {}, handleDelFunc = () => {} }) {
  console.log('universityIndex select -> ', universityIndex)
  return (
    <>
      <select onChange={(e) => handleChangeFunc(e.target.value, universityIndex, index, campusIndex)} value={value}>
        {<option value="">กรุณาเลือก</option>}
        {dataList.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={() => handleAddFunc(universityIndex, index, campusIndex)}>+</button>
      <button onClick={() => handleDelFunc(universityIndex, index, campusIndex)}>-</button>
    </>
  )
}

export default selectComp
