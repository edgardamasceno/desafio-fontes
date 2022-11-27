
DROP TABLE IF EXISTS public."user";
CREATE TABLE public."user" (
	id uuid NOT NULL,
	"name" varchar NOT NULL,
	username varchar NOT NULL,
	"password" varchar NOT NULL,
    created_at timestamp NOT NULL,
	updated_at timestamp NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public.project;
CREATE TABLE public.project (
	id uuid NOT NULL,
	title varchar NOT NULL,
	zip_code varchar NOT NULL,
	"cost" money NOT NULL,
	done bool NOT NULL DEFAULT false,
	deadline timestamp NOT NULL,
	"owner" uuid NOT NULL,
	created_at timestamp NOT NULL,
	updated_at timestamp NOT NULL,
	CONSTRAINT project_pk PRIMARY KEY (id)
);

ALTER TABLE public.project 
    ADD CONSTRAINT project_fk 
        FOREIGN KEY ("owner") 
        REFERENCES public."user"(id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE;