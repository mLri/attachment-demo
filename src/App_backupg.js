import './App.css'
// const axios = require('axios')

import SelectComp from './selectComp'
const { useState } = require('react')

function App() {
  const [universityList, setUniversityList] = useState(['univer01', 'univer02', 'univer03'])
  const [campusList, setCampusList] = useState(['campus01', 'campus02', 'campus03'])
  const [facultyList, setfacultyList] = useState(['faculty01', 'faculty02', 'faculty03'])

  let stateWatch = {
    name: 'test'
  }

  // const [image, setImage] = useState('')

  const [structure, setStructure] = useState([
    {
      university_name: '',
      campuses: [
        {
          campus_name: '',
          faculties: [
            {
              faculty_name: '',
            },
          ],
        },
      ],
    },
  ])

  /* university */
  const handleChangeUniversity = (value, universityIndex, index) => {
    let cloneStructure = [...structure]
    let findUniversity = cloneStructure.find((item, uIndex) => {
      return uIndex == index
    })
    findUniversity.university_name = value
    setStructure(cloneStructure)
  }

  const handleAddUniversity = () => {
    setStructure([
      ...structure,
      {
        university_name: '',
        campuses: [
          {
            campus_name: '',
            faculties: [
              {
                faculty_name: '',
              },
            ],
          },
        ],
      },
    ])
  }

  const handleDelUniversity = (parent_index, index) => {
    let clonStructure = [...structure]
    clonStructure.splice(index, 1)
    setStructure(clonStructure)
  }

  /* campus */
  const handleChangeCampus = (value, parent_index, index) => {
    let cloneStructure = [...structure]
    let findUniversity = cloneStructure.find((item, uindex) => uindex == parent_index)
    let findCampus = findUniversity.campuses.find((item, cindex) => cindex == index)
    findCampus.campus_name = value
    setStructure(cloneStructure)
  }

  const handleAddCampus = (parent_index, index) => {
    let cloneStructure = [...structure]
    let findUniversity = cloneStructure.find((item, index) => index == parent_index)
    findUniversity.campuses.push({
      campus_name: '',
      faculties: [
        {
          faculty_name: '',
        },
      ],
    })
    setStructure(cloneStructure)
  }

  const handleDelCampus = (parent_index, index) => {
    let cloneStructure = [...structure]
    let findUniversity = cloneStructure.find((item, index) => index == parent_index)
    findUniversity.campuses.splice(index, 1)
    setStructure(cloneStructure)
  }

  /* faculty */
  const handleChangeFaculty = (value, universityIndex, index, campusIndex) => {
    let cloneStructure = [...structure]
    let findUniversity = cloneStructure.find((item, university_index) => university_index == universityIndex)
    let findCampus = findUniversity.campuses.find((item, campus_index) => campus_index == campusIndex)
    let findFaculty = findCampus.faculties.find((item, faculty_index) => faculty_index == index)
    findFaculty.faculty_name = value
    setStructure(cloneStructure)
  }

  const handleAddFaculty = (universityIndex, index, campusIndex) => {
    let cloneStructure = [...structure]
    let findUniversity = cloneStructure.find((item, index) => index == universityIndex)
    let findCampus = findUniversity.campuses.find((item, index) => index == campusIndex)
    findCampus.faculties.push({
      faculty_name: '',
    })
    setStructure(cloneStructure)
  }

  const handleDelFaculty = (universityIndex, index, campusIndex) => {
    let cloneStructure = [...structure]
    let findUniversity = cloneStructure.find((item, index) => index == universityIndex)
    let findCampus = findUniversity.campuses.find((item, index) => index == campusIndex)
    findCampus.faculties.splice(index, 1)
    setStructure(cloneStructure)
  }

  // const handleOnUploadImg = async (e) => {
  //   // setPreviewImg(URL.createObjectURL(e.target.files[0]))
  //   console.log('e.target.files[0] -> ', e.target.files[0])
  //   setImage(e.target.files[0])
  // }

  // const handleChangeInput = (e) => {
  //   console.log(e.target.value)
  //   stateWatch = e.target.value
  // }

  return structure.map((val, uindex) => {
    console.log('structure val -> ', val)
    return (
      <div key={uindex}>
        <label>University</label>
        <SelectComp
          dataList={universityList}
          value={val.university_name}
          index={uindex}
          handleChangeFunc={handleChangeUniversity}
          handleAddFunc={handleAddUniversity}
          handleDelFunc={handleDelUniversity}
        />
        {val.campuses.map((val, campusIndex) => {
          // console.log('item -> ', val)
          // console.log('campusIndex ', campusIndex)
          console.log('structure campus val -> ', val)

          // console.log('----------------------------------------')

          return (
            <div key={campusIndex}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Campus</label>
              <SelectComp
                universityIndex={uindex}
                dataList={campusList}
                value={val.campus_name}
                index={campusIndex}
                handleChangeFunc={handleChangeCampus}
                handleAddFunc={handleAddCampus}
                handleDelFunc={handleDelCampus}
              />

              {val.faculties.map((val, facultyIndex) => {
                return (
                  <div key={facultyIndex}>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faculty</label>
                    <SelectComp
                      universityIndex={uindex}
                      campusIndex={campusIndex}
                      dataList={facultyList}
                      value={val.faculty_name}
                      index={facultyIndex}
                      handleChangeFunc={handleChangeFaculty}
                      handleAddFunc={handleAddFaculty}
                      handleDelFunc={handleDelFaculty}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
        <div>--------------------------------------------------------------------------------</div>
        {/* <input type='file' value='' onChange={handleOnUploadImg} /><span>{image.name}</span> */}

        {/* <input type='text' value={stateWatch.name} onChange={handleChangeInput} /> */}
        {/* <input type='text' value={stateWatch.name}/> */}
        {/* <input type='text' value={stateWatch.name}/> */}
      </div>
    )
  })
}

export default App
