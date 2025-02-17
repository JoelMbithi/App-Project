import validator from 'validator'


// API to add doctors
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // checking for all data to add a doctor
        if (!name || !email || !password || !speciality || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }

        //validation of email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Pleae Enter a valid email" })
        }

        //validating strong password  Check if password is at least 8 characters long at least one uppercase letter at least one digit v at least one special character
        if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            return res.json({ success: false, message: "Password is weak. Please enter a strong password." });
        }

    } catch (error) {
     
    }
};

export { addDoctor };
