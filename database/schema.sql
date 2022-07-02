set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."petfinderApp" (
  "tokenId" serial NOT NULL,
  "token_type" TEXT NOT NULL,
  "access_token" TEXT NOT NULL,
  "createdAt" timestamptz(6) not null default now(),
  primary key ("tokenId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."pet" (
  "petId" serial NOT NULL,
  "q" TEXT NOT NULL,
  "qq" TEXT NOT NULL,
  "qqq" TEXT NOT NULL,
  "createdAt" timestamptz(6) not null default now(),
  primary key ("petId")
) WITH (
  OIDS=FALSE
);
