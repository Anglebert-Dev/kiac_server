const Joi = require("joi");
const { Partner } = require("../model/partner.model");

exports.postPartner = async (req, res) => {
  try {
    const createPartnerSchema = Joi.object({
      firstName: Joi.string().required(),
      email: Joi.string().email().required(),
      lastName: Joi.string().required(),
      phone: Joi.string().optional(),
      dob: Joi.date().optional(),
      national_id: Joi.string().optional(),
      gender: Joi.string().valid("male", "female", "other").optional(),
      institution: Joi.string().optional(),
      country: Joi.string().optional(),
      fieldOfStudy: Joi.string().optional(),
      dts: Joi.date().optional(),
      duration: Joi.number().optional(),
      course: Joi.string().optional(),
      career_plan: Joi.string().optional(),
      objective: Joi.string().optional(),
      expectation: Joi.string().optional(),
      payment_status: Joi.boolean(),
      approved: Joi.boolean(),
      status_of_application: Joi.string().default("pending"),
    });

    const studentData = req.body;

    const { error } = createPartnerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: "Invalid or Already used Data Given.",
        errors: error.details,
      });
    }

    exports.getApplications = async (req, res) => {
      try {
        const applications = await Partner.findAll({
          where: {
            approved: false,
            status_of_application: "pending",
          },
        });
    
        // Send the fetched data as a response
        res.status(200).json(applications);
      } catch (error) {
        // Handle any errors that occur during the database query
        console.error('Error fetching applications:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    };

    const application = new Partner(studentData);
    await application.save();

    // Send a successful response back to the client
    return res
      .status(200)
      .json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error during student registration:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// get applications
exports.getApplications = async (req, res) => {
  try {
    const application =  await Partner.findAll({
      where: {
        approved: false,
        status_of_application: "pending",
      },
      
    })
    return res.status(200).json(application);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error occurred",
      details: error.message,
    });
  }
};

//delete agent
exports.rejectApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await Partner.findOne({
      where: {
        id,
      },
    });

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    // Update the application status to "rejected"
    application.status_of_application = "rejected";
    await application.save();

    res.status(200).json({
      message: "Application rejected successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error occurred",
      details: error.message,
    });
  }
};

exports.updatePaymentStatusAndApproved = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await Partner.findOne({
      where: {
        id: id,
      },
    });

    if (!application) {
      return res.status(404).json({
        message: "No application found with the provided ID.",
      });
    }

    const updatedApplication = await application.update({
      payment_status: true,
      approved: true,
      status_of_application: "accepted",
    });

    res.status(200).json({
      message: "Application updated successfully.",
      application: updatedApplication,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error occurred",
      details: error.message,
    });
  }
};
