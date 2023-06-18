IF NOT EXISTS (
    SELECT [name]
        FROM sys.databases
        WHERE [name] = 'StarMaxDB'
)
BEGIN
    CREATE DATABASE StarMaxDB;
    PRINT 'Database ''StarMaxDB'' is created.';
END
ELSE
    PRINT 'Database ''StarMaxDB'' already exists.';
GO
