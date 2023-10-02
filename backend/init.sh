#!/bin/bash

# Wait for PostgreSQL to be ready
until pg_isready -U $POSTGRES_USER -d $POSTGRES_DB ; do
  echo "Waiting for PostgreSQL to become available..."
  sleep 2
done

# Execute the SQL statements from inserts.sql
psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f ./docker-entrypoint-initdb.d/inserts.sql

echo "SQL inserts completed."