-- CreateIndex
CREATE INDEX "users_on_teams_user_id_team_id_idx" ON "users_on_teams"("user_id", "team_id");
