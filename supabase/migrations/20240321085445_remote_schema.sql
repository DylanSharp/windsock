
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."locations" (
    "uuid" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" NOT NULL,
    "description" "jsonb" DEFAULT '[]'::"jsonb" NOT NULL,
    "map_config" "jsonb" DEFAULT '{}'::"jsonb" NOT NULL,
    "ideal_direction" "jsonb" DEFAULT '[]'::"jsonb" NOT NULL,
    "name_at_source" "text"
);

ALTER TABLE "public"."locations" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."weather_data" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "location" "text" NOT NULL,
    "windspeedave" numeric(5,2) NOT NULL,
    "windspeedmax" numeric(5,2) NOT NULL,
    "dirtrue" "text" NOT NULL,
    "dirmag" numeric(5,2) NOT NULL,
    "temp" numeric(5,2) NOT NULL,
    "lastupdated" timestamp with time zone NOT NULL,
    "originallocation" "text" NOT NULL,
    "idealdirection" integer[]
);

ALTER TABLE "public"."weather_data" OWNER TO "postgres";

ALTER TABLE ONLY "public"."locations"
    ADD CONSTRAINT "locations_pkey" PRIMARY KEY ("uuid");

ALTER TABLE ONLY "public"."weather_data"
    ADD CONSTRAINT "weather_data_pkey" PRIMARY KEY ("id");

CREATE POLICY "Enable read access for all users" ON "public"."locations" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."weather_data" FOR SELECT USING (true);

ALTER TABLE "public"."locations" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."weather_data" ENABLE ROW LEVEL SECURITY;

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."locations" TO "anon";
GRANT ALL ON TABLE "public"."locations" TO "authenticated";
GRANT ALL ON TABLE "public"."locations" TO "service_role";

GRANT ALL ON TABLE "public"."weather_data" TO "anon";
GRANT ALL ON TABLE "public"."weather_data" TO "authenticated";
GRANT ALL ON TABLE "public"."weather_data" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
