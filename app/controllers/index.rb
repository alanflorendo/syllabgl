get '/' do
  erb :index
end


post '/game_scenarios' do
	puts params
	10.times { puts "XXXXXXXXXX" }
	gs = GameScenario.create(params[:game_scenario])
end