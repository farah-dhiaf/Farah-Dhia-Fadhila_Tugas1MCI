SELECT * 
FROM `data_mahasiswa.data_mahasiswa`;

--NO.1
SELECT NAMA, UKT
FROM `data_mahasiswa.data_mahasiswa`
WHERE UKT = (
	SELECT MAX(UKT)
	FROM `data_mahasiswa.data_mahasiswa`
);

--NO.2
SELECT NAMA, UKT
FROM `data_mahasiswa.data_mahasiswa`
WHERE UKT = (
	SELECT MAX(UKT)
	FROM `data_mahasiswa.data_mahasiswa`
)
ORDER BY NAMA;

--NO.3
SELECT COUNT(*) AS JUMLAH_MAHASISWA
FROM `data_mahasiswa.data_mahasiswa`
WHERE SEMESTER = 8 AND IPK >= 3.5;

--NO.4
SELECT NAMA, SEMESTER, UKT, 
CASE
  WHEN UKT <= 1000000 THEN 'A'
  WHEN UKT > 1000000 AND UKT <= 2000000 THEN 'B'
  ELSE 'C'
END AS GOLONGAN
FROM `data_mahasiswa.data_mahasiswa`;

--NO.5
SELECT D2.NAMA, D1.SEMESTER, D2.IPK
FROM (
  SELECT SEMESTER, MAX(IPK) AS MAX_IPK
  FROM `data_mahasiswa.data_mahasiswa` 
  GROUP BY SEMESTER 
  ) D1
JOIN `data_mahasiswa.data_mahasiswa` D2
ON D1.SEMESTER = D2.SEMESTER 
WHERE D1.MAX_IPK = D2.IPK
ORDER BY D1.SEMESTER ASC, D2.NAMA ASC;


