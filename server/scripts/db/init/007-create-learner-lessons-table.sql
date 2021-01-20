CREATE TABLE learner_lesson (
  learner_id UUID NOT NULL REFERENCES learners (id) ON DELETE CASCADE,
  lesson_id SMALLINT NOT NULL REFERENCES lessons (id) ON DELETE CASCADE,
  progress NUMERIC,
  PRIMARY KEY (learner_id, lesson_id)
);
