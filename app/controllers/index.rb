require 'json'

get '/' do
  erb :index
end

get '/game.json' do
	content_type :json
	game = GameScenario.find(rand(GameScenario.count))
	gi = GameIssue.create(game_scenario_id: game.id)
	# game.to_json
	limited_game = { id: gi.id, faces: game.faces, max_score: game.max_score }
	limited_game.to_json
end


get '/game/solution/:id.json' do
	game_issue = GameIssue.find(params[:id])
	if (game_issue.created_at + 85) < DateTime.now
		content_type :json
		game = GameScenario.find(game_issue.game_scenario_id)
		solution = { viable_words: game.viable_words 	}
		solution.to_json
	end
end

get '/game_scenarios' do
	@gss = GameScenario.all
	erb :'game_scenarios/index'
end


post '/game_scenarios' do
	gs = GameScenario.create(params[:game_scenario])
end