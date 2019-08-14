class CreateSwimlanes < ActiveRecord::Migration[6.0]
  def change
    create_table :swimlanes do |t|
      t.integer :position
      t.string :name
      t.references :board, null: false, foreign_key: true

      t.timestamps
    end
  end
end
