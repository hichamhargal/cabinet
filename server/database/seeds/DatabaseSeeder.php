<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        // $this->call(UsersTableSeeder::class);
        $path = 'db-data/db.sql';
        DB::unprepared(file_get_contents($path));
        $this->command->info('tables seeded!');
        $path = 'db-data/medicaments1.sql';
        DB::unprepared(file_get_contents($path));
        $this->command->info('medicament table part 1 seeded!');
        $path = 'db-data/medicaments2.sql';
        DB::unprepared(file_get_contents($path));
        $this->command->info('medicament table part 2 seeded!');
        $path = 'db-data/medicaments3.sql';
        DB::unprepared(file_get_contents($path));
        $this->command->info('medicament table part 3 seeded!');
        $path = 'db-data/medicaments4.sql';
        DB::unprepared(file_get_contents($path));
        $this->command->info('medicament table part 4 seeded!');
        $path = 'db-data/medicaments5.sql';
        DB::unprepared(file_get_contents($path));
        $this->command->info('medicament table part 5 seeded!');
        $path = 'db-data/medicaments6.sql';
        DB::unprepared(file_get_contents($path));
        $this->command->info('medicament table part 6 seeded!');
    }
}
