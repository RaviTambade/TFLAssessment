

use enterpriseDB;

//


DROP TABLE IF EXISTS calendars;

CREATE TABLE calendars(
    date DATE PRIMARY KEY,
    month INT NOT NULL,
    quarter INT NOT NULL,
    year INT NOT NULL
);


/*insert dates into the calendars table:*/


CREATE PROCEDURE spInsertCalendar(IN curerntDate DATE)
BEGIN 
        -- insert date into the table
        INSERT INTO calendars(date, month, quarter, year)
        VALUES(currentDate, MONTH(currentDate), QUARTER(currentDate), YEAR(currentDate));
END //

DELIMITER ;



CALL spInsertCalendar('2024-01-01');



//---------------------------------------------------------------------------------

//Calendar tables where we would like to add entries about month, quarter 

CREATE TABLE calendars (
    date DATE PRIMARY KEY,
    month INT NOT NULL,
    quarter INT NOT NULL,
    year INT NOT NULL
);


DELIMITER //

// that inserts rows into the calendars table

CREATE PROCEDURE spfillDates(IN startDate DATE,  IN endDate DATE)
BEGIN
	DECLARE currentDate DATE DEFAULT startDate;
    
	insert_date: LOOP
		-- increase date by one day
		SET currentDate = DATE_ADD(currentDate, INTERVAL 1 DAY);
        
        -- leave the loop if the current date is after the end date
        IF currentDate > endDate THEN
			LEAVE insert_date;
        END IF;
        
        -- insert date into the table
        INSERT INTO calendars(date, month, quarter, year)
        VALUES(currentDate, MONTH(currentDate), QUARTER(currentDate), YEAR(currentDate));
		
    END LOOP;
END //

DELIMITER ;


CALL spfillDates('2024-01-01','2024-12-31');



------------------------------------------------------------------------------

DELIMITER $$

CREATE PROCEDURE spLoadDates(startDate DATE, day INT)
BEGIN
    /*  syntax like C# or java
        int counter=0;
        DateTime currentDate=startdate;
    */

    DECLARE counter INT DEFAULT 0;
    DECLARE currentDate DATE DEFAULT startDate;

    WHILE counter <= day DO
        /*  invoke another stored procedure from current stored proceudure   */
        CALL InsertCalendar(currentDate);
        SET counter = counter + 1;
        SET currentDate = DATE_ADD(currentDate ,INTERVAL 1 day);
    END WHILE;

END$$

DELIMITER ;




------------------------------------------------------------------------------

DELIMITER $$
/*  the REPEAT statement to concatenate numbers from 1 to 9   */
CREATE PROCEDURE spRepeatDemo()
BEGIN
    DECLARE counter INT DEFAULT 1;
    DECLARE result VARCHAR(100) DEFAULT '';
    
    REPEAT
        SET result = CONCAT(result,counter,',');
        SET counter = counter + 1;
    UNTIL counter >= 10
    END REPEAT;
    
    -- display result
    SELECT result;
END$$

DELIMITER ;

CALL spRepeatDemo();




-------------------------------

 checks the credit of a given customer in the customers table from enterpriseDB

 DELIMITER $$

CREATE PROCEDURE spCheckCredit(inCustomerNumber int)

sp: BEGIN
    
    DECLARE customerCount INT;

    -- check if the customer exists
    SELECT  COUNT(*)   INTO customerCount  FROM  customers 
    WHERE customerNumber = inCustomerNumber;
    
    -- if the customer does not exist, terminate
    -- the stored procedure
    IF customerCount = 0 THEN
        LEAVE sp;
    END IF;
    
    -- other logic
    -- ...
END$$

DELIMITER ;

