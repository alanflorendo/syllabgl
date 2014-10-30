get '/' do
  erb :index
end

get '/game_scenarios' do
	@gss = GameScenario.all
	erb :'game_scenarios/index'
end


post '/game_scenarios' do
	gs = GameScenario.create(params[:game_scenario])
end