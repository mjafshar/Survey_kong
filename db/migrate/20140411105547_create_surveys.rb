class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.string :title
      t.integer :user_id
      t.boolean :private, default: false

      t.timestamps
    end
  end
end
