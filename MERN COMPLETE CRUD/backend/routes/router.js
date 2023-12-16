const express = require('express')
const router = express.Router()

const PhoneBook = require('../schema/schema') 


// This code is for add the data to mongodb
router.post('/add-phone', async(req,res) => {
    const phoneNumber = new PhoneBook(req.body)
    try{
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data : {
                message:"phonenumber added successfully"  
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

// this code for update the details in mongodb

router.patch('/update-phone', async (req,res) => {
    const id=req.body.id
    const phone=req.body.phone

    //ithula first id vantu nee entha id ya update panna pora
    // next set la kuduthurukathu vanthu nee ennanu update pannanum
    // for ex:raj id was 2 you want to change raj to rajkumar using id :2
   await PhoneBook.updateOne({id:id},{$set:{"phone":phone}})

    try{
        console.log(id)
        res.status(200).json({
            status : 'Success',
            data : {
              message:"updated successfully"
            }
          })
    }catch(err){
        console.log(err)
    }
})

// this code is for delete

router.delete('/delete-phone', async(req,res) => {
    const id=req.body.id
    await PhoneBook.deleteOne({id:id})
    
    try{
    
      res.status(204).json({
          status : 'Success',
          data : {
            message:"deleted success"
          }
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})


// this code is for read from the database

// Assuming the URL is /get-phone
router.get('/get-phone', async (req, res) => {
    const { name } = req.query;

    try {
      // Use the name parameter to query the database
      const phoneNumbers = await PhoneBook.find({ name: name });
  
      res.status(200).json({
        status: 'Success',
        data: {
          phoneNumbers,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'Failed',
        message: err.message,
      });
    }
  });
  

module.exports=router