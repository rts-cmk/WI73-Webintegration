SELECT `bolche`.`navn` as 'bolche', 
`farve`.`navn` as 'farve', 
`surhed`.`navn` as 'surhed' , 
`styrke`.`navn` as 'styrke', 
`smag`.`navn` as 'smag' 

FROM `bolche` 
inner join `farve` on `bolche`.`fk_farve` = `farve`.`id` 
inner join `surhed` on `bolche`.`fk_surhed` = `surhed`.`id` 
inner join `styrke` on `bolche`.`fk_styrke` = `styrke`.`id` 
inner join `smag` on `bolche`.`fk_smag` = `smag`.`id`
