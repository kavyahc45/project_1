import axios from 'axios'


export const studentProfile = profileuser => {
  return axios
    .post('users/userProfile', {
      Username: profileuser.studentname,
      address: profileuser.address,
      email: profileuser.email,
      mobileNumber: profileuser.mobileNumber,
      course: profileuser.course
    })
    .catch(err => {
      console.log(err)
    })
}


