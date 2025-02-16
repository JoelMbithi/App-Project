// API to add doctors
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, about, fees, address } = req.body;
        const imageFile = req.file;

        console.log({ name, email, password, speciality, about, fees, address }, imageFile);
        res.status(200).json({ message: "Doctor added successfully" });
    } catch (error) {
        console.error("Error in addDoctor:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export { addDoctor };
