DELIMITER //

CREATE PROCEDURE GetUserProfile(IN userId INT)
BEGIN
    SELECT 
        u.id AS user_id,
        u.contact,
        u.status,
        u.created_at,
        u.updated_at,
        p.first_name,
        p.last_name,
        p.gender,
        p.date_of_birth,
        p.email,
        p.address,
        a.specialization,
        a.enrollment_year,
        a.passing_year,
        a.percentage,
        a.college_name,
        pi.skills
        
    FROM users u
    LEFT JOIN personal_informations p ON u.id = p.user_id
    LEFT JOIN academic_informations a ON u.id = a.user_id
    LEFT JOIN professional_informations pi ON u.id=pi.user_id
    WHERE u.id = userId;
END //

DELIMITER ;