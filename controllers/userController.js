const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
const {User} = require('../models')


const userController = {
    register: async (req,res)=>{
        console.log(req.body.name);
        const {name, username, email, password} = req.body
        try {
            const checkEmail = await User.findOne({
                where: {
                    email
                }
            })

            if(checkEmail){
                return res.status(400).json({
                    status: 'Bad Request',
                    message: 'You already registered. Please log in',
                    result: {}
                })
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const user = await User.create({name, username, email, password: hashedPassword})
            
            if(!user){
                return res.status(500).json({
                    status: 'Internal Server Error',
                    message: 'failed to create account',
                    result: {}
                })
            }

            res.status(201).json({
                status: 'success',
                message: 'successfully created account',
                result: user
            })

        } catch (error) {
            res.status(500).json({
                status: 'Internal Server Error',
                message: error.message,
                result: {}
            })
        }
    },

    loginUser: async (req,res) => {
    
    //get email dan pass melalui body

    const {email, password} = req.body
    
    //cari akun di database menggunakan email
    const user = await User.findOne({
        where: {
            email: email.trim().toLowerCase()
        }
    })

    //cek apakah user ditemukan atau tidak
    if(!user){
        return res.status(401).json({
            status: "Unauthorized",
            message: "Invalid email and password combination",
            result: {}
        })
    }

    //cek apakah password benar atau salah
    const checkPassword = await bcrypt.compare(password, user.password)
    
    if(!checkPassword){
        return res.status(401).json({
            status: 'Unauthorized',
            message: 'Invalid email and password combination',
            result: {}
        })
    }

    //jika user sudah otentikasi, buatkan akses token
    const accessToken = jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET_KEY)
    
    //kirim response: akses token dan user object
    res.status(200).json({
        status: 'success',
        message: 'successfully logged in',
        result: {
            accessToken, 
            user: {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                avatar_path: user.avatar_path,
                backdrop_path: user.backdrop_path,
        }}
    })
    } 
}

module.exports = userController