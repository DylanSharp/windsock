alter table "public"."weather_data" drop column "dirmag";

alter table "public"."weather_data" drop column "dirtrue";

alter table "public"."weather_data" drop column "idealdirection";

alter table "public"."weather_data" drop column "lastupdated";

alter table "public"."weather_data" drop column "location";

alter table "public"."weather_data" drop column "originallocation";

alter table "public"."weather_data" drop column "windspeedave";

alter table "public"."weather_data" drop column "windspeedmax";

alter table "public"."weather_data" add column "dir_mag" numeric(5,2) not null;

alter table "public"."weather_data" add column "dir_true" text not null;

alter table "public"."weather_data" add column "ideal_direction" integer[];

alter table "public"."weather_data" add column "last_updated" timestamp with time zone not null;

alter table "public"."weather_data" add column "location_uuid" uuid not null;

alter table "public"."weather_data" add column "original_location" text not null;

alter table "public"."weather_data" add column "windspeed_ave" numeric(5,2) not null;

alter table "public"."weather_data" add column "windspeed_max" numeric(5,2) not null;

alter table "public"."weather_data" add constraint "public_weather_data_location_uuid_fkey" FOREIGN KEY (location_uuid) REFERENCES locations(uuid) not valid;

alter table "public"."weather_data" validate constraint "public_weather_data_location_uuid_fkey";


