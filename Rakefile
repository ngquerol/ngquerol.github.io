require "reduce"

## Global variables
# The user and password should be specified in $HOME/.netrc,
# which should have "0600" permissions set.
# This require 'lftp' to be installed.

HOST = "durlak.fr"
# Compression format used for backups
BACKUP_FORMAT = ".tar.xz"
# Path to the directory where backups will be stored
BACKUP_DIR = "$HOME/Dropbox/backups"

desc "Delete _site/"
task :delete do
    puts "\## Deleting _site/"
    system "rm -r _site" if File.directory?("_site")
end

# Courtesy of https://github.com/pacbard/blog/blob/master/_rake/minify.rake
desc "Minify _site/"
task :minify do
    puts "\n## Compressing static assets"
    original = 0.0
    compressed = 0
    Dir.glob("_site/**/*.*") do |file|
        case File.extname(file)
        when ".css", ".gif", ".html", ".jpg", ".jpeg", ".js", ".png", ".xml"
            puts "Processing: #{file}"
            original += File.size(file).to_f
            min = Reduce.reduce(file)
            File.open(file, "w") do |f|
                f.write(min)
            end
            compressed += File.size(file)
        else
            puts "Skipping: #{file}"
        end
    end
    puts "Total compression %0.2f\%" % (((original-compressed)/original)*100)
end

desc "Backup workspace"
task :backup do
    Rake::Task["delete"].invoke
    puts "\n## Creating XZ archive"
    status = system "tar -caf ${PWD##*/}#{BACKUP_FORMAT} *"
    puts status ? "Success" : "Failed"
    puts "\n## Moving archive to #{BACKUP_DIR}"
    status = system "mv ${PWD##*/}.tar.xz #{BACKUP_DIR}"
    puts status ? "Success" : "Failed"
end

namespace :build do
    desc "Build _site/ for production"
    task :pro do
        Rake::Task["delete"].invoke
        puts "\n## Building Jekyll to _site/"
        status = system "jekyll build"
        puts status ? "Success" : "Failed"
        Rake::Task["minify"].invoke
    end
end

namespace :deploy do
    desc "Deploy _site/ to FTP server"
    task :ftp do
        Rake::Task["build:pro"].invoke
        puts "\n## Deploying content to FTP server"
        status = system "lftp -e 'mirror -R --exclude Rakefile --verbose _site/ /; bye' #{HOST}"
        puts status ? "Success" : "Failed"
    end
end
