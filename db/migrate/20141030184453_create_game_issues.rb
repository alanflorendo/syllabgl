class CreateGameIssues < ActiveRecord::Migration
  def change
  	create_table :game_issues do |t|
  		t.integer :game_scenario_id
  		t.timestamps
  	end
  end
end
