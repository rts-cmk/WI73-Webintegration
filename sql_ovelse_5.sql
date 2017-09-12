select `navn`,

round((((1000/`vaegt`) * `pris` *3.5) / 100),2) as 'kg/pris uden moms',
round((((1000/`vaegt`) * `pris` *3.5 * 1.25) / 100),2) as 'kg/pris med moms'

from `bolche`
