require 'json'

get '/' do
  erb :index
end

get '/game.json' do
	content_type :json
	game = GameScenario.find(rand(GameScenario.count))
	game.to_json
	# limited_game = { id: game.id, faceString: game.faces, max_score: game.max_score }
	# limited_game.to_json
end


get '/game/solution/:id.json' do
	content_type :json
	game = GameScenario.find(params[:id])
	solution = { viable_words: game.viable_words 	}
	solution.to_json
end

get '/game_scenarios' do
	@gss = GameScenario.all
	erb :'game_scenarios/index'
end


post '/game_scenarios' do
	gs = GameScenario.create(params[:game_scenario])
end