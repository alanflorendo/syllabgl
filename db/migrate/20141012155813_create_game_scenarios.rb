class CreateGameScenarios < ActiveRecord::Migration
  def change
  	create_table :game_scenarios do |t|
  		t.text :faces
  		t.text :viable_words
  		t.integer :max_score
  	end
  end
end
